"use client";

import { useState } from "react";
import Link from "next/link";


export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault();

        props.toggle();

        setUsername('');
        setPassword('');

    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label >
                        Username:
                    </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <label >
                        Password:
                    </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="confirm">
                        <button className="login-submit" type="submit">Login</button>
                        <p className="text-submit" > New Here? &nbsp; <Link href={"/register"} style={{ textDecoration: 'none' }}> Register </Link> </p>
                    </div>
                </form>
                <button className="close-button" onClick={props.toggle}>X</button>
            </div>
        </div>
    )
}

