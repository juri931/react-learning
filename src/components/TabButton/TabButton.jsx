export default function TabButton({ label, click, active }) {
  return (
    <li>
      <button className={active ? "active" : ""} onClick={click}>
        {label}
      </button>
    </li>
  );
}
