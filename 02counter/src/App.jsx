import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(15);

  // let addValue = () => {
  //   // console.log("clicked", Math.random());
  //   // counter = counter + 1;
  //   setCounter(counter + 1);
  // };

  // let removeValue = () => {
  //   setCounter(counter - 1);
  // };

  // let addValue = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  //   setCounter((prevCounter) => prevCounter + 1);
  //   setCounter((prevCounter) => prevCounter + 1);
  //   setCounter((prevCounter) => prevCounter + 1);
  // };

  /*
  let addValue = () => {
  // Increment the counter by 1.
  setCounter((prevCounter) => prevCounter + 1);

  // Ensure that the counter value never exceeds 20.
  setCounter((prevCounter) => Math.min(prevCounter, 20));
};

let removeValue = () => {
  // Decrement the counter by 1.
  setCounter((prevCounter) => prevCounter - 1);

  // Ensure that the counter value never goes below 0.
  setCounter((prevCounter) => Math.max(prevCounter, 0));
};

  */

  let removeValue = () => {
    // Safely decrement the counter by 1.
    setCounter((prevCounter) => {
      // Check if the counter is greater than 0.
      if (prevCounter > 0) {
        // Decrement the counter by 1.
        return prevCounter - 1;
      } else {
        // Prevent the counter from going below 0.
        return 0;
      }
    });
  };

  let addValue = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      } else {
        return 20;
      }
    });
  };

  return (
    <>
      <h2>Hello, Counter Value {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
