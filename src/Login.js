import React from 'react';
import "./Login.css";
import { Button } from 'react-bootstrap'

function Login() {

    const signIn = e => {

    }

    return (
        <div className="login">
            {/* <h2>I am the Login Page</h2> */}
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="discord branding" />
            </div>

            <Button onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
