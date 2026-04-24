
//import TableRow from './tablerow'; 

export default function Table({ data }) {
  const items = Array.isArray(data) ? data : [];

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-dark text-white fw-semibold fs-6">
        Liste des Clients
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered align-middle mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th style={{ width: "50px" }}>N°</th>
              <th>Nom</th>
              <th>Prénoms</th>
              <th style={{ width: "80px" }}>Contact</th>
              <th style={{ width: "110px" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((client, index) => (
                <tr key={client?.email ?? index}>
                  <td>{index + 1}</td>
                  <td>{client?.nom ?? "-"}</td>
                  <td>{client?.prenoms ?? "-"}</td>
                  <td>{client?.contact ?? "-"}</td>
                  <td>{client?.email ?? "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-muted py-5 fs-5">
                  Aucun client ne correspond aux filtres.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}