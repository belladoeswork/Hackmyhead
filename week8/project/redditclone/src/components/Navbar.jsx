"use client"

import Link from "next/link";
// import Login from "@/app/login/page";
import Login from "@/components/login.jsx";
import Register from '@/app/login/page';

import { useState } from "react";



export default function Navbar() {

  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };


  return (
    <div className="navbar">
      <Link href={"/"}>Home</Link>
      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search Reddit" />
      </div>
      <Link href={"/subreddits"}>Subreddits</Link>
      <div>
        <Link href={"/login"} onClick={togglePop}>Login</Link>
        {seen ? <Login toggle={togglePop} /> : null}
      </div>

      <div>
        <Link href={"/register"} onClick={togglePop}>Register</Link>
        {seen ? <Register toggle={togglePop} /> : null}
      </div>

      {/* <Link href={"/register"}>Register</Link> */}

      <Link href={"/logout"}>Logout</Link>
    </div>
  );
}
