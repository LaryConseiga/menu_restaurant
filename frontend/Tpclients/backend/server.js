const express = require("express");
const cors    = require("cors");
const app     = express();

// ── Middlewares ───────────────────────────────────────────────────────────────
app.use(cors());            // autorise les requêtes depuis React (localhost:5173)
app.use(express.json());    // parse le corps des requêtes en JSON

// ── Routes ────────────────────────────────────────────────────────────────────
const clientsRouter = require("./routes/etudiants");
app.use("/api/clients", clientsRouter);

// ── Démarrage du serveur ──────────────────────────────────────────────────────
const PORT = Number(process.env.PORT) || 8000;
const server = app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(
            `Le port ${PORT} est déjà utilisé (une autre instance du serveur ?). ` +
                `Sous Windows : netstat -ano | findstr :${PORT} puis taskkill /PID <pid> /F`
        );
    } else {
        console.error(err);
    }
    process.exit(1);
});
