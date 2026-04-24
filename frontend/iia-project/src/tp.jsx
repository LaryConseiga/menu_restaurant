import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Stats from './component/Stats'
import Header from './component/Header'
import Search from './component/Search'
import Table from './component/Table'
//import Formulaire from './component/formulaire'
import { getEtudiants, createEtudiant } from './services/etudiantService'

export default function Tp() {
  const [searchText, setSearchText] = useState("")
  const [valideSeulement, setValideSeulement] = useState(false)
  const [fillesValide, setFillesValide] = useState(false)
  const [garconsValide, setGarconsValide] = useState(false)

  const [etudiants, setEtudiants] = useState([])
  const [loading, setLoading] = useState(true)
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    const loadEtudiants = async () => {
      try {
        const data = await getEtudiants()
        setEtudiants(Array.isArray(data) ? data : [])
      } catch (err) {
        const msg = err?.message || ""
        if (err?.name === "AbortError") {
          setErreur(
            "Le serveur met trop longtemps à répondre. Vérifie que le backend tourne (port 8000), que MySQL est démarré et que DB_PASSWORD dans backend/.env est correct, puis recharge."
          )
        } else if (msg === "Failed to fetch" || msg.includes("NetworkError")) {
          setErreur(
            "Impossible de joindre l'API. Lancez le backend (dossier backend : npm start), vérifiez MySQL, puis rechargez la page."
          )
        } else {
          setErreur(msg || "Erreur lors du chargement des étudiants.")
        }
      } finally {
        setLoading(false)
      }
    }

    loadEtudiants()
  }, [])

  if (loading) return <p>Chargement...</p>
  if (erreur) return <p className="text-danger">{erreur}</p>

  const handleAddEtudiant = (nouvelEtudiant) => {
    createEtudiant(nouvelEtudiant)
      .then((ajoute) => {
        setEtudiants((prev) => [...prev, ajoute])
      })
      .catch(() => {
        setErreur("Erreur lors de l'ajout de l'étudiant.")
      })
  }

  const filtered = etudiants.filter(e => {
    const matchSearch =
      e.nom.toLowerCase().includes(searchText.toLowerCase()) ||
      e.prenoms.toLowerCase().includes(searchText.toLowerCase())

    const matchValide =
      !valideSeulement || e.decision.toLowerCase() === "validé"

    const matchFilles =
      !fillesValide || (e.genre === "F" && e.decision.toLowerCase() === "validé")

    const matchGarcons =
      !garconsValide || (e.genre === "M" && e.decision.toLowerCase() === "validé")

    return matchSearch && matchValide && matchFilles && matchGarcons
  })

  const totalEtudiants = filtered.length;
  const totalValides = filtered.filter((e) => e.decision === "Validé").length;
  const totalNonValides = filtered.filter((e) => e.decision !== "Validé").length;
  const totalFilles = filtered.filter((e) => e.genre === "F").length;
  const totalGarcons = filtered.filter((e) => e.genre === "M").length;


  return (
    <>
      <Header />

      <div className="container py-5">
        <Stats 
          totalEtudiants={totalEtudiants} 
          totalValides={totalValides} 
          totalNonValides={totalNonValides} 
          totalFilles={totalFilles} 
          totalGarcons={totalGarcons}
        />
        <div className="mb-4 container P-2">
     
        </div>

        <Search
          searchText={searchText}
          handleSearchChange={(e) => setSearchText(e.target.value)}
          handleChecked={(e) => setValideSeulement(e.target.checked)}
          handleFillesValideChecked={(e) => setFillesValide(e.target.checked)}
          handleGarconsValideChecked={(e) => setGarconsValide(e.target.checked)}
        />

        <Table data={filtered} />
      </div>
    </>
  )
}