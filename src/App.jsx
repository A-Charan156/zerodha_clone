import './App.css'
import Header from './Header'
import Products from './Products.jsx'
function App() {

  return (
    <>
      <Header />
      <section style={{ textAlign: "center" }}>
        <img src="https://zerodha.com/static/images/landing.svg" alt="home-logo" />
        <h2>Invest in everything</h2>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button id="btn">SignUp</button>
      </section>
      <Products />
    </>
  )
}

export default App
