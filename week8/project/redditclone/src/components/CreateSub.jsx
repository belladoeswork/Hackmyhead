"use client"


import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bg from "@/../public/redditbg.jpg";
import bgimg from "@/../public/bgimg.webp";
import Login from "@/app/login/page";

import subreddits from "@/app/subreddits/page";
import { useRouter } from "next/navigation.js";
import { useState } from "react";
import Link from "next/link";



export default function CreateSub() {
    const [subredditName, setSubredditName] = useState("");
    const [newSub, setNewSub] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const [error, setError] = useState("");
    const router = useRouter();




    function handleNewSub() {
        setNewSub(true);
        router.refresh();
    }


    function handleClose() {
        setNewSub(true);
        router.refresh();
    }


    const openPopup = () => setPopupOpen(!isPopupOpen);

    const navigateToSubs = () => {
        setPopupOpen(true);
        router.push("/login");
    };


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("/api/users/subreddits", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name: subredditName }),
        });

        const info = await response.json();

        if (!info.success) {
            setError(info.error);
        } else {
            setSubredditName("");
            router.refresh();
        }
    }


    return (

        <div className="popup" style={{ display: props.isPopupOpen ? "block" : "none" }}>
            <div className="popup-inner">
                <h2>New Subreddit</h2>
                <form onSubmit={handleNewSub}>
                    <label>Community name:</label>
                    <input 
                        type="text" 
                        value={subredditName} 
                        onChange={(e) => setSubredditName(e.target.value)} 
                    />
                    <div className="confirm">
                        <button className="reg-submit" type="submit" onClick={handleSubmit} >
                            Create Community
                        </button>
                    </div>
                </form>
                <button className="close-button" onClick={handleClose}>
                    X
                </button>
            </div>
        </div>

    );
}





