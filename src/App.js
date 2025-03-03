import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <div className="display" data-testid="display">{input}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button onClick={clearInput} className="clear">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
