import React, { useState } from "react";
import "../App.css";

function Greeting() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleGreet = () => {
    if (name.trim() === "") {
      setGreeting("Please enter your name!");
    } else {
      setGreeting(`Hello, ${name}! Welcome to my React app 😄`);
    }
  };

  return (
    <div className="container">

      <h1>Simple React App</h1>
      <h2>Hello World</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Greet Me</button>
      {greeting && <p className="message">{greeting}</p>}
    </div>
  );
}

export default Greeting;
