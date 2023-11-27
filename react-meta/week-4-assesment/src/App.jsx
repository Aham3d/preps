import { useState, useRef } from "react";

function App() {

  const [result , setResult] = useState(0); 

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
        />
        <button>+</button>
        <button>-</button>
        <button>*</button> 
        <button>/</button>
        <button>reset input</button>
        <button>reset result</button>
      </form>
    </div>
  )

}

export default App;