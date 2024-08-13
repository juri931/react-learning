import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import "./Examples.css";
import Section from "../Section/Section";

export default function Examples() {
  // useState
  const [selectedTopic, setSelectedTopic] = useState();
  // Click Handler
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* Click events */}
        <TabButton
          active={selectedTopic === "components"}
          onClick={() => handleClick("components")}
          label="Components"
        ></TabButton>
        <TabButton
          active={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
          label="JSX"
        ></TabButton>
        <TabButton
          active={selectedTopic === "props"}
          onClick={() => handleClick("props")}
          label="Props"
        ></TabButton>
        <TabButton
          active={selectedTopic === "state"}
          onClick={() => handleClick("state")}
          label="State"
        ></TabButton>
      </menu>

      {/* Rendering Content Conditionally */}
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
