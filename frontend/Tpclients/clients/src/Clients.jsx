import Header from "./component/header"
import FormulaireClients from "./component/formulaireClients"
import Table from "./component/TableClient"
import Search from "./component/SearchClients"
import { useState, useEffect } from "react"

export default function Clients() {
    const [searchText, setSearchText] = useState("");
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        const loadClients = async () => {
            try {
                const response = await fetch("/api/clients");
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status} : ${response.statusText}`);
                }
                const data = await response.json();
                setClients(Array.isArray(data) ? data : []);
            } catch (err) {
                const msg = err?.message || "";
                if (err?.name === "AbortError") {
                    setError(
                        "Le serveur met trop longtemps à répondre. Vérifie que le backend tourne (port 8000), que MySQL est démarré et que DB_PASSWORD dans backend/.env est correct, puis recharge."
                    );
                } else if (msg === "Failed to fetch" || msg.includes("NetworkError")) {
                    setError(
                        "Impossible de joindre l'API. Lancez le backend (dossier backend : npm start), vérifiez MySQL, puis rechargez la page."
                    );
                } else {
                    setError(msg || "Erreur lors du chargement des clients.");
                }
            } finally {
                setLoading(false);
            }
        };

        loadClients();
    }, []);

    const handleCreateClient = async (nouveauClient) => {
        try {
            const response = await fetch("/api/clients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nouveauClient),
            });
            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body?.message || "Erreur lors de la création du client.");
            }
            const createdClient = await response.json();
            setClients((prev) => [...prev, createdClient]);
        } catch (err) {
            setError(err?.message || "Erreur lors de l'ajout du client.");
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    const normalizedSearch = searchText.trim().toLowerCase();
    const filteredClients = clients.filter((client) => {
        if (!normalizedSearch) return true;
        const values = [client.nom, client.prenoms, client.contact, client.email]
            .filter(Boolean)
            .map((value) => String(value).toLowerCase());
        return values.some((text) => text.includes(normalizedSearch));
    });

    return (
        <>
            <div className="container py-4 mt-4">
                <Header />
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <div className="mb-4 container p-2">
                    <FormulaireClients onSubmit={handleCreateClient} />
                </div>
                <Search searchText={searchText} handleSearchChange={handleSearchChange} />
                {loading ? (
                    <div className="text-center py-4">Chargement des clients...</div>
                ) : (
                    <Table data={filteredClients} />
                )}
            </div>
        </>
    );
}
