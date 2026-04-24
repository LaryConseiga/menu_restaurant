import { useState } from "react";
import Usercard from './prop1.jsx';
import { useEffect } from "react";
import Input from './component/input.jsx';

export default function Name() {
    const [user, setUser] = useState({nom:"conseiga",prenom:"Larissa ", age:18 } );

    const handleChange = (e) => {
        const {name, value}= e.target;
        setUser(prev => ({...prev, [name]: value}));
    }

    useEffect(() => {
    document.title = user.nom;
  }, [user.nom]);



  return (
    <>
    <input
    name="nom"
    placeholder="entrez votre nom"
    onChange={handleChange}/>
    <input
    name="prenom"
    placeholder="entrez votre prenom"
    onChange={handleChange}/>
    <input
    name="age"
    type="number"
    placeholder="entrez votre age"
    onChange={handleChange}/>

    
    

    <Usercard
    nom={user.nom}
    prenom={user.prenom}
    age={user.age}/>


   

    
    </>
   
  );
}