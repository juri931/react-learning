import Header from "./components/Header.jsx";
// Using StateLogin (useState) for form validation
import Signup from "./components/Signup";
// Using Login for code improvement
import Login from "./components/StateLogin";

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;
