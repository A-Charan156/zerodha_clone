import { useState } from 'react';
import { z } from "zod"

let userschema = z.string().min(6, "username must need min 6 characters").max(16, "max limit 16 character")
let passwordschema = z.string().min(8, "password must need min 8 characters").max(16, "max limit 16 character")
let emailschema = z.email().min(3, "min 3 characters")
let roleschema = z.string().min(1, "role must have min 1 character")

// helper function
function validate(schema, value) {
    if (!value) return ""
    let result = schema.safeParse(value)
    if (result.success) return ""
    return result.error.issues[0].message
}

function Register() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [role, setrole] = useState('')

    let senddetails = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch('https://backendecom-fanm.onrender.com/auth/register', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    role
                })
            });
            let data = await response.json();
            if (data.token) {
                localStorage.setItem("token", data.token)
            }
            alert(data.msg)
        } catch (error) {
            alert("Error: " + error.message);
        }
    }

    return (
        <>
            <form onSubmit={senddetails}>
                <input onChange={(e) => { setusername(e.target.value) }} type="text" placeholder='username' />
                <p>{validate(userschema, username)}</p>
                <br />
                <input onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder='password' />
                <p>{validate(passwordschema, password)}</p>
                <br />
                <input onChange={(e) => { setemail(e.target.value) }} type="text" placeholder='email' />
                <p>{validate(emailschema, email)}</p>
                <br />
                <input onChange={(e) => { setrole(e.target.value) }} type="text" placeholder='role' />
                <p>{validate(roleschema, role)}</p>
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register