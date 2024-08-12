// Essential imports
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import TabButton from "../TabButton/TabButton";
import "./Main.css";

export default function Main() {
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
          <TabButton label="Components"></TabButton>
          <TabButton label="JSX"></TabButton>
          <TabButton label="Props"></TabButton>
          <TabButton label="State"></TabButton>
        </menu>
      </section>
    </main>
  );
}
