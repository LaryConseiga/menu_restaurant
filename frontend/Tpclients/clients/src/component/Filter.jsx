export default function Filter({ onFilter }) {
  return (
    <div>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">Tous</option>
        <option value="M">Garçons</option>
        <option value="F">Filles</option>
      </select>
    </div>
  );
}