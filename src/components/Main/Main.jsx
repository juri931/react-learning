// Essential imports
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import TabButton from "../TabButton/TabButton";
import "./Main.css";
import { useState } from "react";

export default function Main() {
  // useState
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
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
            click={() => handleClick("Components")}
            label="Components"
          ></TabButton>
          <TabButton click={() => handleClick("JSX")} label="JSX"></TabButton>
          <TabButton
            click={() => handleClick("Props")}
            label="Props"
          ></TabButton>
          <TabButton
            click={() => handleClick("State")}
            label="State"
          ></TabButton>
        </menu>
        {selectedTopic}
      </section>
    </main>
  );
}
