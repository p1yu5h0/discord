import React from 'react';
import "./Login.css";
import { Button } from 'react-bootstrap';
import {auth} from './firebase';
import {provider} from './firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
        
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="discord branding" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
