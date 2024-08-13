import reactImg from "../../assets/react-core-concepts.png";
// CSS
import "./Header.css";
// Creating and Using Dynamic Values
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Components MUST start with Uppercase letter!
export default function Header() {
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
