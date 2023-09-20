import './App.css';
import {useState} from "react"

function App() {

  const [Text, setText] = useState('hello')

  function handleChange(e) {
    setText(e.target.value); 
  }

  return (
    <>
      <input value={Text} onChange={handleChange}/>
      <p>input says: {Text}</p>
      <button onClick={() => setText('hi')}>
        Reset
      </button>
    </>
  )
}

export default App;
// revision