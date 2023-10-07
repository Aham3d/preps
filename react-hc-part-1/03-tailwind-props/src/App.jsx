import './App.css'
import Card from './components/card'

function App() {

  // let myObg = {
  //   username: 'moin', 
  //   age: 21
  // }

  // let Arr =  [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>check</h1>

      <Card username="name" btnText="click here"/>
      <Card username="name2"/>
    </>
  )
}

export default App
// revise oct