// Header import
// import { Fragment } from "react"; NO MORE USE if we use <></> for root tag
import Header from "./components/Header/Header.jsx";

// Main import
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    // Instead of importing and using the <Fragment>react code</Fragment> tag for a component's root, I can use simple opening and closing blank tags and React will recognize it as a root element.
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
