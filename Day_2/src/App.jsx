import { useState } from 'react'
import './App.css'
import Header from './Header'
import Products from './Products.jsx'

function App() {
  // 1. Added state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Added toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // 3. Replaced <> with a div that changes class based on state
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <section style={{ textAlign: "center" }}>
        <img src="https://zerodha.com/static/images/landing.svg" alt="home-logo" />
        <h2>Invest in everything</h2>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button id="btn">SignUp</button>
      </section>

      <Products />
    </div>
  )
}

export default App
