// "use client"

import Link from "next/link";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import SearchBar from "@/components/SearchBar.jsx";
import LogReg from "@/components/LogReg.jsx";
import UserMenu from "@/components/UserMenu.jsx";


import { fetchUser } from  "@/lib/fetchUser.js";


export default async function Navbar() {


  return (
    <div className="navbar">
      <div className="nav-section">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="nav-section">
        <SearchBar />
      </div>
      <div className="nav-section">
        <LogReg />
      </div>
      <div className="nav-section">
        <UserMenu />
      </div>
    </div>
  );
}



      {/* <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search Reddit" />
      </div> */}
      {/* <Link href={"/subreddits"}>Subreddits</Link> */}
      {/* {!user.id && ( */}
        {/* <div>
          <div>
            <Link href={"/login"} >Login</Link> */}
            {/* onClick={togglePop} {seen ? <Login toggle={togglePop} /> : null} */}
          {/* </div>

          <div>
            <Link href={"/register"} > Register</Link> */}
            {/* <Link href={"/register"} onClick={togglePop}>Register</Link>
            onClick={() => setModalOpen(true)}
            {seen ? <Register toggle={togglePop} /> : null} */}
          {/* </div> */}
        {/* </div> */}
      {/* )} */}
      {/* {user.id && ( */}
        {/* <div> */}

      {/* <Link href={"/register"}>Register</Link> */}

          {/* <Link href={"/logout"}>Logout</Link>
        </div> */}
      {/* )} */}