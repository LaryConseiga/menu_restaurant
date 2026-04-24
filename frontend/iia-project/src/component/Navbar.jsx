import { Link, useLocation } from 'react-router-dom';

// Définition des liens du menu
const LIENS = [
    { path: "/",           label: "Liste Étudiants"  },
    { path: "/ajouter",    label: "Ajouter Étudiant" },
    { path: "/contact",    label: "Contact"           },
    { path: "/parametres", label: "Paramètres"        },
];

function Navbar() {

    // useLocation donne l'URL actuelle
    // ex : { pathname: "/contact" }
    const location = useLocation();

    const fermerOffcanvas = () => {
        const offcanvas = document.getElementById("menuMobile");
        const instance  = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
        if (instance) instance.hide();
    };

    return (
        <>
            {/* grand ecran */}
            <nav className="navbar navbar-dark bg-dark shadow-sm sticky-top">
                <div className="container-fluid px-3">

                    {/* Bouton burger — visible uniquement sur mobile */}
                    <button
                        className="navbar-toggler d-lg-none border-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#menuMobile"
                        aria-controls="menuMobile"
                        aria-label="Ouvrir le menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Logo cliquable qui ramène à l'accueil */}
                    <Link
                        to="/"
                        className="navbar-brand fw-bold text-danger mx-auto mx-lg-0 order-lg-first text-decoration-none"
                    >
                        Gestion Étudiants — 2iE
                    </Link>

                    {/* Liens desktop — visibles uniquement sur grands écrans */}
                    <ul className="navbar-nav d-none d-lg-flex flex-row gap-2 ms-auto">
                        {LIENS.map(lien => (
                            <li className="nav-item" key={lien.path}>
                                <Link
                                    to={lien.path}
                                    className={`btn btn-sm text-decoration-none ${
                                        location.pathname === lien.path
                                            ? "btn-danger"
                                            : "btn-outline-light"
                                    }`}
                                >
                                    {lien.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </nav>

            {/* le mobile*/}
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="menuMobile"
                aria-labelledby="menuMobileLabel"
                style={{ width: "260px" }}
            >
                {/* En-tête du panneau */}
                <div className="offcanvas-header bg-dark text-white">
                    <h5
                        className="offcanvas-title text-danger fw-bold"
                        id="menuMobileLabel"
                    >
                        Gestion Étudiants
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Fermer"
                    />
                </div>

                {/* Corps du panneau */}
                <div className="offcanvas-body p-0 bg-dark">

                    <div className="px-3 py-2 border-bottom border-secondary">
                        <small className="text-secondary text-uppercase fw-semibold">
                            Navigation
                        </small>
                    </div>

                    {/* Liens de navigation */}
                    <ul className="list-unstyled m-0">
                        {LIENS.map(lien => {
                            const estActif = location.pathname === lien.path;
                            return (
                                <li key={lien.path}>
                                    <Link
                                        to={lien.path}
                                        className={`d-flex align-items-center gap-3 px-4 py-3 text-decoration-none border-bottom border-secondary ${
                                            estActif
                                                ? "bg-danger text-white fw-bold"
                                                : "text-light"
                                        }`}
                                        onClick={fermerOffcanvas}
                                    >
                                        {/* Barre verticale indicateur page active */}
                                        {estActif && (
                                            <span style={{
                                                width:        "4px",
                                                height:       "20px",
                                                background:   "white",
                                                borderRadius: "4px",
                                                flexShrink:   0,
                                            }} />
                                        )}
                                        {lien.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Pied du panneau */}
                    <div className="position-absolute bottom-0 w-100 px-3 py-3 border-top border-secondary">
                        <small className="text-secondary">Institut 2iE — 2025 / 2026</small>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;