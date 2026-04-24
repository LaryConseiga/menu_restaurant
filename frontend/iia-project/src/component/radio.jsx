export default function Radio({ label, name, value, onChange }) {
  return (
    <label>
      <input type="radio" name={name} value={value} onChange={onChange} />
      {label}
    </label>
  );
}