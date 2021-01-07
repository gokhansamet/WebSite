import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChanged(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleChanged}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChanged}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChanged}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
