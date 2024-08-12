import "./CoreConcept.css";

// Props w/ shorthand
{
  /* No more CoreConcept(props) but ({prop1, prop2, prop3}) */
}
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      {/* No more props.prop_name but just prop_name */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
