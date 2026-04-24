const express = require("express");
const router  = express.Router();
const db      = require("../db");

// ══════════════════════════════════════════════════════════════════════════════
// GET /api/clients — Récupérer tous les clients
// ══════════════════════════════════════════════════════════════════════════════
router.get("/", (req, res) => {
    const sql = "SELECT * FROM clients ORDER BY nom, prenoms";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        res.json(results);
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// GET /api/clients/:id — Récupérer un seul client
// ══════════════════════════════════════════════════════════════════════════════
router.get("/:id", (req, res) => {
    const sql = "SELECT * FROM clients WHERE id = ?";

    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Client non trouvé" });
        }
        res.json(results[0]);
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// POST /api/clients — Ajouter un client
// ══════════════════════════════════════════════════════════════════════════════
router.post("/", (req, res) => {
    const { nom, prenoms, contact, email } = req.body;

    // Validation côté serveur
    if (!nom || !prenoms || !contact || !email) {
        return res.status(400).json({ message: "Champs obligatoires manquants." });
    }

    const sql = `
        INSERT INTO clients 
        (nom, prenoms, contact, email)
        VALUES (?, ?, ?, ?)
    `;

    const valeurs = [nom, prenoms, contact, email];

    db.query(sql, valeurs, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }

        res.status(201).json({
            id: result.insertId,
            nom,
            prenoms,
            contact,
            email,
        });
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// PUT /api/clients/:id — Modifier un client
// ══════════════════════════════════════════════════════════════════════════════
router.put("/:id", (req, res) => {
    const { nom, prenoms, contact, email } = req.body;

    const sql = `
        UPDATE clients SET
            nom      = ?,
            prenoms  = ?,
            contact  = ?,
            email    = ?
        WHERE id = ?
    `;

    const valeurs = [nom, prenoms, contact, email, req.params.id];

    db.query(sql, valeurs, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Client non trouvé" });
        }
        res.json({ message: "Client mis à jour avec succès" });
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// DELETE /api/clients/:id — Supprimer un client
// ══════════════════════════════════════════════════════════════════════
router.delete("/:id", (req, res) => {
    const sql = "DELETE FROM clients WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur", erreur: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Client non trouvé" });
        }
        res.json({ message: "Client supprimé avec succès" });
    });
});

module.exports = router;
