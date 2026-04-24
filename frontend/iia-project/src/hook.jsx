import { useState } from "react";

const Counter = () => {
  const [age, setAge] = useState(18);

  const increment = () => {
    setAge(age + 1);
  };
  const decrement = () => {
    if (age > 0) {
    setAge(age - 1);
  }
};

  return (
    <div>
      <h1>Mon age est: {age}</h1>
      <h1>Statut: {age>=18 ?  "majeur" : "mineur"  }</h1>
      <button  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
       onClick={increment}>Augmenter</button>
      <button  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        onClick= {decrement}> Diminuer </button>
    </div>
  );
};
export default Counter;