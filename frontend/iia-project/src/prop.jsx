const User = (props) => {
  return (
    <section>
      
      <h3>est majeur: {props.isMajeur ? "Majeur" : "mineur"}</h3>
      <p>Statut:</p>
      
    </section>
  );
};   
export default User;



