"use client"

import { useRouter } from "next/navigation.js";
import { useState, useEffect } from "react";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import UserMenu from "@/components/UserMenu.jsx";



export default function LogReg() {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const router = useRouter();
    const [userUpdated, setUserUpdated] = useState(false);

    const openLoginPopup = () => {
        setLoginPopupOpen(true);
    };

    const [isRegPopupOpen, setRegPopupOpen] = useState(false);

    const openRegPopup = () => {
        setRegPopupOpen(true);
    };


    const handleRegistrationComplete = () => {
        setRegPopupOpen(false);
        setUserUpdated(!userUpdated); 
    };


    // useEffect(() => {
    //     if (!isRegPopupOpen) {
    //         router.refresh();
    //     }
    // }, [isRegPopupOpen]);



    return (
        <div className="logreg-container">
            <button className="login-button" onClick={openLoginPopup}> Log In </button>
            {isLoginPopupOpen && <Login toggle={() => setLoginPopupOpen(false)} />}
            <button className="register-button" onClick={openRegPopup}> Sign Up </button>
            {/* {isRegPopupOpen && <Register toggle={() => setRegPopupOpen(false)} />} */}
            {isRegPopupOpen && <Register onRegistrationComplete={handleRegistrationComplete} />}
            <UserMenu userUpdated={userUpdated} toggleUserUpdate={() => setUserUpdated(!userUpdated)} />
        </div>
    );

}

