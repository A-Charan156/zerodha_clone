import { useState } from "react"
function Login() {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let senddetails = async (event) => {
        event.preventDefault()
        let jwttoken = localStorage.getItem('token')
        let response = await fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwttoken}`
            },
            body: JSON.stringify({ username, password })
        })
        let data = await response.json()
        alert(data.msg)
    }

    return (
        <>
            <section style={{ textAlign: "center" }}>
                <h1>Login Form</h1><br />
                <form onSubmit={senddetails}>
                    <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="username" /><br />
                    <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="password" /><br />
                    <button>Login</button>
                </form>
            </section>
        </>
    )
}

export default Login