import { useState } from "react";
import Stats from ".component/Stats";
import Filter from ".component/Filter";
import Search from ".component/Search";
import Table from ".component/Table";
const ETUDIANTS = [
    { id: 1,  numero_inscription: "20220466", nom: "YAMBOGO",             prenoms: "Brice",                       filiere: "IIAA",    genre: "M", moyenne: 13.5,  decision: "Validé"     },
    { id: 2,  numero_inscription: "20230455", nom: "NIKIEMA",             prenoms: "Kiswendsida Sirice Aaron",    filiere: "IIAA",    genre: "M", moyenne: 8.0,   decision: "Non validé" },
    { id: 3,  numero_inscription: "20230516", nom: "BAKO",                prenoms: "Stève Hakira Ange François",  filiere: "IIAA",    genre: "M", moyenne: 11.25, decision: "Validé"     },
    { id: 4,  numero_inscription: "20230526", nom: "TIDJANI",             prenoms: "Mehdi Mastour Djide",         filiere: "IIAA",    genre: "M", moyenne: 6.75,  decision: "Non validé" },
    { id: 5,  numero_inscription: "20250055", nom: "YODA",                prenoms: "Maïmouna Yasmine",            filiere: "IIAA",    genre: "F", moyenne: 15.0,  decision: "Validé"     },
    { id: 6,  numero_inscription: "20250056", nom: "PODA",                prenoms: "Somalo Rodrigue Jordy",       filiere: "IIAA",    genre: "M", moyenne: 9.5,   decision: "Non validé" },
    { id: 7,  numero_inscription: "20250067", nom: "SEGDA",               prenoms: "Ramondgwindé Alimata Saadia", filiere: "IIAA",    genre: "F", moyenne: 17.25, decision: "Validé"     },
    { id: 8,  numero_inscription: "20250118", nom: "ASSI",                prenoms: "Chonou Jean-Louis",           filiere: "IIAA",    genre: "M", moyenne: 5.5,   decision: "Non validé" },
    { id: 9,  numero_inscription: "20250198", nom: "OUEDRAOGO",           prenoms: "Yassine Rachide Rayengwendé", filiere: "IIAA",    genre: "M", moyenne: 12.0,  decision: "Validé"     },
    { id: 10, numero_inscription: "20220631", nom: "NITIEMA",             prenoms: "Aguiratou",                   filiere: "CB 2IE",  genre: "F", moyenne: 14.75, decision: "Validé"     },
    { id: 11, numero_inscription: "20220641", nom: "OUEDRAOGO",           prenoms: "Martin Hyacinthe",            filiere: "CB 2IE",  genre: "M", moyenne: 7.25,  decision: "Non validé" },
    { id: 12, numero_inscription: "20230563", nom: "BIAM",                prenoms: "Kwami Alfred Jordal",         filiere: "CB 2IE",  genre: "M", moyenne: 19.0,  decision: "Validé"     },
    { id: 13, numero_inscription: "20230564", nom: "COMBARY",             prenoms: "Anaïs Banyala Urielle",       filiere: "CB 2IE",  genre: "F", moyenne: 10.5,  decision: "Validé"     },
    { id: 14, numero_inscription: "20230566", nom: "CONSEIGA",            prenoms: "Cherifatou Pendgwendé",       filiere: "CB 2IE",  genre: "F", moyenne: 6.0,   decision: "Non validé" },
    { id: 15, numero_inscription: "20230567", nom: "DIESSONGO",           prenoms: "Hounssouley Johanne Hasley",  filiere: "CB 2IE",  genre: "F", moyenne: 16.5,  decision: "Validé"     },
    { id: 16, numero_inscription: "20230568", nom: "FEUDJEU II MEDONGOU", prenoms: "La grace",                   filiere: "CB 2IE",  genre: "F", moyenne: 11.75, decision: "Validé"     },
    { id: 17, numero_inscription: "20230569", nom: "ILINGA",              prenoms: "Solange",                    filiere: "CB 2IE",  genre: "F", moyenne: 8.5,   decision: "Non validé" },
    { id: 18, numero_inscription: "20230571", nom: "KONDO",               prenoms: "Cherifatou Espérance",        filiere: "CB 2IE",  genre: "F", moyenne: 13.0,  decision: "Validé"     },
    { id: 19, numero_inscription: "20230572", nom: "NDONGO",              prenoms: "Ivan Fresnel",                filiere: "CB 2IE",  genre: "M", moyenne: 5.25,  decision: "Non validé" },
    { id: 20, numero_inscription: "20230573", nom: "NIKIEMA",             prenoms: "Kiswend-Sida Gaël",           filiere: "CB 2IE",  genre: "M", moyenne: 18.0,  decision: "Validé"     },
    { id: 21, numero_inscription: "20230576", nom: "RAMANAMISETA",        prenoms: "Dera Judicaël",               filiere: "CB 2IE",  genre: "M", moyenne: 9.75,  decision: "Non validé" },
    { id: 22, numero_inscription: "20230577", nom: "SAWADOGO",            prenoms: "Pedgwende Jerielle Vinoria",  filiere: "CB 2IE",  genre: "F", moyenne: 14.25, decision: "Validé"     },
    { id: 23, numero_inscription: "20230579", nom: "TEMGOUA SOBZE",       prenoms: "Ilona Leila",                 filiere: "CB 2IE",  genre: "F", moyenne: 7.0,   decision: "Non validé" },
    { id: 24, numero_inscription: "20230580", nom: "TRAORE",              prenoms: "Ardjata Hanaa Estelle",       filiere: "CB 2IE",  genre: "F", moyenne: 20.0,  decision: "Validé"     },
    { id: 25, numero_inscription: "20230581", nom: "YAMEOGO",             prenoms: "Sylviane Laure Rolande",      filiere: "CB 2IE",  genre: "F", moyenne: 12.5,  decision: "Validé"     },
    { id: 26, numero_inscription: "20230922", nom: "RAGHAY",              prenoms: "Nizar",                      filiere: "CB 2IE",  genre: "M", moyenne: 6.5,   decision: "Non validé" },
];

export default function Tpetudiant() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredData = ETUDIANTS.filter((e) => {
    const matchSearch =
      e.nom.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "" || e.genre === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div>
      <h2>Liste des étudiants</h2>

     
      <Stats data={ETUDIANTS} />

      <Filter onFilter={setFilter} />

      <Search onSearch={setSearch} />

    
      <Table data={filteredData} />
    </div>
  );
}