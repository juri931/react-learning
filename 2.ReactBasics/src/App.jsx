// Header import
// import { Fragment } from "react"; NO MORE USE if we use <></> for root tag
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import "../src/App.css";

function App() {
  return (
    // Instead of importing and using the <Fragment>react code</Fragment> tag for a component's root, I can use simple opening and closing blank tags and React will recognize it as a root element.
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
