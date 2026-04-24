
import { useState } from 'react';

export default function Formulaire({ onSubmit }) {
  
    const [formData, setFormData] = useState({
        nom: '',
        prenoms: '',
        filiere: '',
        numero_inscription: '',
        genre: '',
        moyenne: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(etu => ({ ...etu, [name]: value }));
        console.log("Données du formulaire mises à jour:", { ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const moyenne =parseFloat(parseFloat(formData.moyenne).toFixed(2));

        onSubmit({
            ...formData,
            moyenne,
            decision: moyenne >= 10 ? "Validé" : "Non validé"
            
        });


        setFormData({ nom: '', prenoms: '', numero_inscription: '', genre: '', moyenne: '' });
        console.log("Formulaire soumis:", formData);
    };

    return (
        <div>
            <h1>Formulaire d'inscription</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputNom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="exampleInputNom" name="nom" value={formData.nom} onChange={handleChange} required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPrenom" className="form-label">Prenoms</label>
                    <input type="text" className="form-control" id="exampleInputPrenom" name="prenoms" value={formData.prenoms} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputFiliere" className="form-label">Filère</label>
                    <select className="form-select" id="exampleInputFiliere" name="filiere" value={formData.filiere} onChange={handleChange} required>
                        <option value="">Sélectionnez la filière</option>
                        <option value="Informatique">CB2IE</option>
                        <option value="Mathématiques">IIAA</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputNumeroInscription" className="form-label">Numero d'inscription</label>
                    <input type="text" className="form-control" id="exampleInputNumeroInscription" name="numero_inscription" value={formData.numero_inscription} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputGenre" className="form-label">Genre</label>
                    <select className="form-select" id="exampleInputGenre" name="genre" value={formData.genre} onChange={handleChange} required>
                        <option value="">Sélectionnez le genre</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputMoyenne" className="form-label">Moyenne</label>
                    <input type="number" className="form-control" id="exampleInputMoyenne" name="moyenne" value={formData.moyenne} onChange={handleChange} min="0" max="20" step="0.1" required />
                </div>

                <button type="submit" className="btn btn-danger">Soumettre</button>
            </form>
        </div>
    );
}