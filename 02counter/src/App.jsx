import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  // arrow function
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    // console.log("clicked", counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    // console.log("clicked", counter);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button on onClick={removeValue}>
        Remove value{counter}
      </button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
