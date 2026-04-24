

export default function Stats({ totalEtudiants, totalValides, totalNonValides, totalFilles, totalGarcons }) {
   



    return (
        <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
                <div className="card text-white bg-primary shadow-sm text-center h-100">
                    <div className="card-body">
                        <div className="display-5 fw-bold">{totalEtudiants}</div>
                        <div className="small mt-1"> Étudiants affichés</div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="card text-white bg-success shadow-sm text-center h-100">
                    <div className="card-body">
                        <div className="display-5 fw-bold">{totalValides}</div>
                        <div className="small mt-1"> Validé(s)</div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="card text-white bg-danger shadow-sm text-center h-100">
                    <div className="card-body">
                        <div className="display-5 fw-bold">{totalNonValides}</div>
                        <div className="small mt-1"> Non validé(s)</div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="card text-dark bg-warning shadow-sm text-center h-100">
                    <div className="card-body">
                        <div className="fs-4 fw-bold">{totalFilles} / {totalGarcons}</div>
                        <div className="small mt-1">Filles / Garçons</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
