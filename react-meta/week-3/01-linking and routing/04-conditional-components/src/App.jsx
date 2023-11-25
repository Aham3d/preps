import './App.css'
import {Routes, Route, Link, Router} from 'react-router-dom'
import LogInOut from './components/logInOut'


function App() {

  // let name; 
  // let random = Math.random(); 

  // 1
  // if(random > 0.5) {
  //   name = "moin"; 
  // } else {
  //   name = "ahamed"; 
  // }

  // 2
  // let newUser = false; 
  // if(random > 0.5 && newUser) {
  //   name = "moin"; 
  // } else if(random > 0.5) {
  //   name = "ahamed"; 
  // } else {
  //   name = "mion"
  // }

  // console.log(name)
  // console.log(random);

  return (
    <>
      <LogInOut isLoggedIn={true}/>
    </>
  )
}

export default App
// revise(nov)