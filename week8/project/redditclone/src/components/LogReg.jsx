"use client"

import { useRouter } from "next/navigation.js";
import { useState } from "react";
import Login from "@/app/login/page";
import Register from "@/app/register/page";


export default function LogReg() {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

    const openLoginPopup = () => {
        setLoginPopupOpen(true);
    };

    const [isRegPopupOpen, setRegPopupOpen] = useState(false);

    const openRegPopup = () => {
        setRegPopupOpen(true);
    };


    return (
        <div className="logreg-container">
            <button className="login-button" onClick={openLoginPopup}> Log In </button>
            {isLoginPopupOpen && <Login toggle={() => setLoginPopupOpen(false)} />}
            <button className="register-button" onClick={openRegPopup}> Sign Up </button>
            {isRegPopupOpen && <Register toggle={() => setRegPopupOpen(false)} />}
        </div>
    );

}

