
import { useState } from 'react';

export default function Formulaire({ onSubmit = () => {} }) {
  
    const [formData, setFormData] = useState({
        nom: '',
        prenoms: '',
        contact: '',
        email: ''
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({        
            ...prevData,
            [name]: value,
        }));
    }           
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);     


        setFormData({ 
         nom: '',
        prenoms: '',
        contact: '',
        email: '' });
        console.log("Formulaire soumis:", formData);
    };

    return (
        <div>
            <h1>Fiche de renseignement</h1>
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
                    <label htmlFor="exampleInputFiliere" className="form-label">Contact</label>
                    <input type="tel" className="form-control" id="exampleInputContact" name="contact" value={formData.contact} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputNumeroInscription" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" name="email" value={formData.email} onChange={handleChange} required />
                </div>

               

                <button type="submit" className="btn btn-danger">Soumettre</button>
            </form>
        </div>
    );
}