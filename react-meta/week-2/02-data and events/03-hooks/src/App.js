import './App.css';
import {useState} from "react"
import RegisterForm from './using hooks(reading)/RegisterForm';

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
      <RegisterForm />
    </>
  )
}

export default App;
// revision