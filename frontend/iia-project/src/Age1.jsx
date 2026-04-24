import { useState } from "react";
import Usercard from "./prop1.jsx";
import Input from "./component/input.jsx";

export default function Name() {
  const [user, setUser] = useState({
    nom: "conseiga",
    prenom: "Larissa",
    age: 18
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h2>Formulaire </h2>

      <form onSubmit={handleSubmit}>
        <Input
          name="nom"
          label="Nom"
          type="text"
          placeholder="Entrez votre nom"
          value={user.nom}
          onChange={handleChange}
          required
        />

        <Input
          name="prenom"
          label="Prénom"
          type="text"
          placeholder="Entrez votre prénom"
          value={user.prenom}
          onChange={handleChange}
          required
        />

        <Input
          name="age"
          label="Âge"
          type="number"
          placeholder="Entrez votre âge"
          value={user.age}
          onChange={handleChange}
          required
        />

       
      </form>

      <Usercard
        nom={user.nom}
        prenom={user.prenom}
        age={user.age}
      />
    </div>
  );
}