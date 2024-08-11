// Image importing
import reactImg from "./assets/react-core-concepts.png";

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
      <img src={reactImg} alt="Stylized atom" />
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
      <h2>Time to get started!</h2>
    </main>
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
