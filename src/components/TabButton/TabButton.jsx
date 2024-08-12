export default function TabButton({ label, click }) {
  return (
    <li>
      <button onClick={click}>{label}</button>
    </li>
  );
}
