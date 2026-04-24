import Checkbox from "./checkbox";
import Inputs from "./input";

export default function Search({ searchText, handleSearchChange,handleChecked, valideSeulement, fillesValide, garconsValide, handleFillesValideChecked, handleGarconsValideChecked }) {
    

  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-header bg-dark text-white fw-semibold fs-6">
        Recherche & Filtres
      </div>
      <div className="card-body bg-light">
        <label className="form-label fw-semibold text-secondary small text-uppercase">
          Rechercher un étudiant
        </label>
        <Inputs
          placeholder="Nom, prénom, N° inscription, filière..."
          type="text"
          className="btn btn-input"
          value={searchText}
          onChange={handleSearchChange}
        />

        <hr className="my-3" />

        {/* Checkboxes */}
        <div className="row g-2">
          <div className="col-12 col-md-4">
            <div className="form-check form-switch ps-5">
              <Checkbox
                id="valide-only"
                checked={valideSeulement}
                label=" Validés seulement"
                onChange={handleChecked}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-check form-switch ps-5">
              <Checkbox
                id="filles-valide"
                checked={fillesValide}
                label=" Filles validées seulement"
                onChange={handleFillesValideChecked }
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-check form-switch ps-5">
              <Checkbox
                id="garcons-valide"
                checked={garconsValide}
                label=" Garçons validés seulement"
                onChange={handleGarconsValideChecked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
