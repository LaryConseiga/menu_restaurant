export default function Select({ options, onChange }) {
  return (
    <select onChange={onChange}>
      <option value="">Choisir...</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}