
import TableRow from './tablerow'; 

export default function Table({ data }) {
  const items = Array.isArray(data) ? data : [];

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-dark text-white fw-semibold fs-6">
        Liste des étudiants
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered align-middle mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th style={{ width: "50px" }}>N°</th>
              <th>N° Inscription</th>
              <th>Nom</th>
              <th>Prénoms</th>
              <th style={{ width: "80px" }}>Genre</th>
              <th style={{ width: "110px" }}>Moyenne</th>
              <th style={{ width: "140px" }}>Décision</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((etudiant, index) => (
                <TableRow 
                  key={etudiant?.id ?? index} 
                  etudiant={etudiant} 
                  index={index} 
                />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center text-muted py-5 fs-5">
                  Aucun étudiant ne correspond aux filtres.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}