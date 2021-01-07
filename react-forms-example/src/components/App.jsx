import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [textHeading, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  // When the button clicked then set the heading as the name
  function handleClick(event) {
    setHeading(name);
    event.preventDefault(); // to prevent an action
  }
  return (
    <div className="container">
      <h1>Hello {textHeading} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          // What is currently inside ? (value)
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
