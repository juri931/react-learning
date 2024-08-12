// Essential imports
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import TabButton from "../TabButton/TabButton";
import "./Main.css";
import { useState } from "react";

export default function Main() {
  // useState
  const [selectedTopic, setSelectedTopic] = useState();
  // Click Handler
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* Click events */}
          <TabButton
            active={selectedTopic === "components"}
            click={() => handleClick("components")}
            label="Components"
          ></TabButton>
          <TabButton
            active={selectedTopic === "jsx"}
            click={() => handleClick("jsx")}
            label="JSX"
          ></TabButton>
          <TabButton
            active={selectedTopic === "props"}
            click={() => handleClick("props")}
            label="Props"
          ></TabButton>
          <TabButton
            active={selectedTopic === "state"}
            click={() => handleClick("state")}
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
      </section>
    </main>
  );
}
