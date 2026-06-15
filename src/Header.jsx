import { Link } from 'react-router-dom'

function Header({ isDarkMode, toggleTheme }) {
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img height={30} width={100} src="https://zerodha.com/static/images/logo.svg" alt="logo" />
                <input type='text' placeholder='search products...'></input>
                <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <Link to={'/register'}>Signup</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/products'}>Products</Link>
                    <Link to={'/login'}>Login</Link>

                    <button onClick={toggleTheme} style={{ padding: "4px 12px", cursor: "pointer", borderRadius: "4px", border: "1px solid #ccc" }}>
                        {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header