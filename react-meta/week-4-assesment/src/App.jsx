import { useState, useRef } from "react";

function App() {

  const inputRef = useRef(null);
  // const resultRef = useRef(null);
  const [result , setResult] = useState(0); 

  function plus(e) {
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value))
  }

  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };

  function times(e) { 
  	e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 

  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };

  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0; 
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0) 
  }; 

  return (
    <div className="App">
      <div>
        <h1>simple calculator</h1>
      </div>
      <form>
        <p>
          {result}
        </p>
        <input 
          type="number" 
          pattern="[0-9]"
          placeholder="type a number"
          ref={inputRef}
        />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button> 
        <button onClick={divide}>/</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  )

}

export default App;