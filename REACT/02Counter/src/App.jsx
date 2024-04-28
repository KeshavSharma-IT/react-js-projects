import { useState } from "react";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(0);
  const removeValue = () => {
    if (!Counter > 0) {
      setCounter(0);
    } else {
      setCounter(Counter - 1);
    }
  };
  return (
    <>
      <h1>Keshav</h1>
      <h2>COUNTER Value is : {Counter}</h2>
      <button onClick={() => setCounter((Counter) => Counter + 1)}>
        Add Value : {Counter}
      </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value : {Counter}</button>
    </>
  );
}

export default App;
