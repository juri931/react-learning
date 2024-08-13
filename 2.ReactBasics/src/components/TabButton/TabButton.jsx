export default function TabButton({ label, active, ...props }) {
  return (
    <li>
      <button className={active ? "active" : ""} {...props}>
        {label}
      </button>
    </li>
  );
}
