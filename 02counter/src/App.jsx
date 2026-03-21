import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5

  const increaseValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    
  };
  return (
    <>
      <section>
        <h1>Chai aur react</h1>
        <h2>counter value: {counter}</h2>

        <button onClick={increaseValue}>Increase value {counter}</button>
        <br />
        <button onClick={decreaseValue}>Decrease value {counter}</button>
        <p>footer : {counter}</p>
      </section>
    </>
  );
}

export default App;
