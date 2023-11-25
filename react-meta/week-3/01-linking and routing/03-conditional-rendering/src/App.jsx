import './App.css'
import {Routes, Route, Link, Router} from 'react-router-dom'
import Weekend from './components/Weekend'
import WorkDay from './components/WorkDay'
import About from './components/About'
import HomePage from './components/Homepage'



function App() {

  return (
    <>
      <div className='header'>
        <div>
          LOGO
        </div>
        <nav className='nav'>
          <Link to="/" className='nav-item'>HomePage</Link> 
          <Link to="/about-me" className='nav-item'>about me</Link> 
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </>
  )
}

export default App
// revise(nov)