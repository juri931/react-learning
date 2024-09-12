export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        // type="email"
        // name={name}
        // value={enteredValues.email}
        // onBlur={() => handleInputBlur("email")}
        // onChange={(event) => handleInputChange("email", event.target.value)}
        {...props}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
