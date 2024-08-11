// Images importing
import reactImg from "./assets/react-core-concepts.png";

// Props importing
import { CORE_CONCEPTS } from "./data.js";

// Creating and Using Dynamic Values
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Components MUST start with Uppercase letter!
function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" /> {/* Image importing */}
      <h1>React Essentials</h1>
      <p>
        {/* Adding the dynamic value */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* Props importing w/ shorthand */}
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          {/* Extended version */}
          <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          />
        </ul>
      </section>
    </main>
  );
}

// Props w/ shorthand
{
  /* No more CoreConcept(props) but ({prop1, prop2, prop3}) */
}
function CoreConcept({ image, title, description }) {
  return (
    <li>
      {/* No more props.prop_name but just prop_name */}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
