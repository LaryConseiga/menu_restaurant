const Usercard = ({ nom, prenom, age }) => {
  return (
    <section>
        <h1>{nom} {prenom} a {age} ans et est {age>=18 ?  "majeur" : "mineur"  } </h1>
    </section>
  );
};

export default Usercard;