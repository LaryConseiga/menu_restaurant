//import Checkbox from "./checkbox";
import Inputs from "./input";

export default function Search({searchText, handleSearchChange}) {
    

  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-header bg-dark text-white fw-semibold fs-6">
        Recherche & Filtres
      </div>
      <div className="card-body bg-light">
        <label className="form-label fw-semibold text-secondary small text-uppercase">
          Rechercher un client
        </label>
        <Inputs
          placeholder="Nom, prénom, contact, email..."
          type="text"
          className="btn btn-input"
          value={searchText}
          onChange={handleSearchChange}
        />

        <hr className="my-3" />

        
        </div>
      </div>
    
  );
}
