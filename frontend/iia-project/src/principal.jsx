import Checkbox from "./component/checkbox";
import Radio from "./component/radio";
import Select from "./component/select";
import FileInput from "./component/file";

export default function Principal() {
  const preferences = ["Riz", "Couscous", "Banane"];

  const handleCheckbox = (e) => {
    alert("Préférence choisie : " + e.target.value);
  };

  const handleRadio = (e) => {
    alert("Choix radio : " + e.target.value);
  };

  const handleSelect = (e) => {
    alert("Choix select : " + e.target.value);
  };

  const handleFile = (e) => {
    alert("Fichier sélectionné");
  };

  return (
    <div>
      <h2>Choisissez vos préférences</h2>

     
      {preferences.map((item) => (
        <Checkbox
          key={item}
          label={item}
          value={item}
          onChange={handleCheckbox}
        />
      ))}

      <br />
   
      {preferences.map((item) => (
        <Radio
          key={item}
          name="food"
          label={item}
          value={item}
          onChange={handleRadio}
        />
      ))}

      <h3>Select</h3>
      <Select options={preferences} onChange={handleSelect} />

     
      <h3>File</h3>
      <FileInput onChange={handleFile} />
    </div>
  );
}