import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
      <nav className='nav'>
        <Link to="/" className='nav-item'>HomePage</Link> 
        <Link to="/about" className='nav-item'>about me</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App
