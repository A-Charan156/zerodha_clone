import { useState } from 'react'
import './App.css'
import Header from './Header'
import Products from './Products.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [searchquery, setsearchquery] = useState('')
  // 1. Added state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Added toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // 3. Replaced <> with a div that changes class based on state
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} setsearchquery={setsearchquery} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products searchquery={searchquery} />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
