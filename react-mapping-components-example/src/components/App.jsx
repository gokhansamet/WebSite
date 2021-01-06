import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((details) => (
          <Entry
            key={details.id}
            emoji={details.emoji}
            name={details.name}
            description={details.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
