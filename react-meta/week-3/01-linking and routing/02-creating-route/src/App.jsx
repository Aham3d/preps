import './App.css'
import {Routes, Route, Link, Router} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'


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
          <Link to="/contact-page" className='nav-item'>Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path='/contact-page' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
