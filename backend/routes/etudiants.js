const express = require("express");
const router  = express.Router();
const db      = require("../db");

// ══════════════════════════════════════════════════════════════════════════════
// GET /api/etudiants — Récupérer tous les étudiants
// ══════════════════════════════════════════════════════════════════════════════
router.get("/", (req, res) => {
    const sql = "SELECT * FROM etudiants ORDER BY filiere, nom";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        res.json(results);
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// GET /api/etudiants/:id — Récupérer un seul étudiant
// ══════════════════════════════════════════════════════════════════════════════
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM etudiants WHERE id = ?";

    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Etudiant non trouvé" });
        }
        res.json(results[0]);
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// POST /api/etudiants — Ajouter un étudiant
// ══════════════════════════════════════════════════════════════════════════════
router.post("/", (req, res) => {
    const { numero_inscription, nom, prenoms, filiere, genre, moyenne } = req.body;

    // Validation côté serveur
    if (!numero_inscription || !nom || !prenoms || moyenne === undefined) {
        return res.status(400).json({ message: "Champs obligatoires manquants." });
    }

    // Calcul automatique de la décision
    const decision = parseFloat(moyenne) >= 10 ? "Validé" : "Non validé";

    const sql = `
        INSERT INTO etudiants 
        (numero_inscription, nom, prenoms, filiere, genre, moyenne, decision)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const valeurs = [numero_inscription, nom, prenoms, filiere, genre, moyenne, decision];

    db.query(sql, valeurs, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }

        // Retourne l'étudiant créé avec son id généré par MySQL
        res.status(201).json({
            id: result.insertId,
            numero_inscription,
            nom,
            prenoms,
            filiere,
            genre,
            moyenne: parseFloat(moyenne),
            decision,
        });
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// PUT /api/etudiants/:id — Modifier un étudiant
// ══════════════════════════════════════════════════════════════════════════════
router.put("/:id", (req, res) => {
    const { numero_inscription, nom, prenoms, filiere, genre, moyenne } = req.body;

    const decision = parseFloat(moyenne) >= 10 ? "Validé" : "Non validé";

    const sql = `
        UPDATE etudiants SET
            numero_inscription = ?,
            nom                = ?,
            prenoms            = ?,
            filiere            = ?,
            genre              = ?,
            moyenne            = ?,
            decision           = ?
        WHERE id = ?
    `;

    const valeurs = [numero_inscription, nom, prenoms, filiere, genre, moyenne, decision, req.params.id];

    db.query(sql, valeurs, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Etudiant non trouvé" });
        }
        res.json({ message: "Etudiant mis à jour avec succès" });
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// DELETE /api/etudiants/:id — Supprimer un étudiant
// ══════════════════════════════════════════════════════════════════════════════
router.delete("/:id", (req, res) => {
    const sql = "DELETE FROM etudiants WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Etudiant non trouvé" });
        }
        res.json({ message: "Etudiant supprimé avec succès" });
    });
});

module.exports = router;
