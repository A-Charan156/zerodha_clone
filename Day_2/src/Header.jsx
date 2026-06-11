
function Header({ isDarkMode, toggleTheme }) {
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img height={30} width={100} src="https://zerodha.com/static/images/logo.svg" alt="logo" />
                <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <a href="">Signup</a>
                    <a href="">About</a>
                    <a href="">Products</a>
                    <a href="">Pricing</a>
                    <a href="">Support</a>
                    <button onClick={toggleTheme} style={{ padding: "4px 12px", cursor: "pointer", borderRadius: "4px", border: "1px solid #ccc" }}>
                        {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header