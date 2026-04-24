import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-dark">Contact</h2>
                <p className="text-muted">Informations de l'équipe pédagogique</p>
                <hr className="mx-auto" style={{ width: "80px" }} />
            </div>

            <div className="row justify-content-center g-4">

                {/* Carte contact */}
                <div className="col-md-5">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-header bg-dark text-white fw-semibold">
                            Informations de contact
                        </div>
                        <div className="card-body">
                            <p><strong>Etablissement :</strong> Institut 2iE</p>
                            <p><strong>Matière :</strong> Généralité Type d'IA</p>
                            <p><strong>Salle :</strong> B6.4</p>
                            <p><strong>Horaires :</strong> 10H – 12H</p>
                            <p className="mb-0"><strong>Email :</strong> contact@2ie-edu.org</p>
                        </div>
                    </div>
                </div>

                {/* Carte raccourcis */}
                <div className="col-md-5">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-header bg-dark text-white fw-semibold">
                            Raccourcis
                        </div>
                        <div className="card-body d-flex flex-column gap-2">
                            <Link to="/"          className="btn btn-outline-primary">Voir la liste des étudiants</Link>
                            <Link to="/ajouter"   className="btn btn-outline-success">Ajouter un étudiant</Link>
                            <Link to="/parametres" className="btn btn-outline-secondary">Paramètres</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;