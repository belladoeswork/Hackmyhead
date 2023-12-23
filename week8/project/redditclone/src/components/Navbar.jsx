// "use client"

import Link from "next/link";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import SearchBar from "@/components/SearchBar.jsx";
import LogReg from "@/components/LogReg.jsx";
import UserMenu from "@/components/UserMenu.jsx";
import Home from "@/components/Home.jsx";
import SideNav from "@/components/SideNav.jsx";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import { fetchUser } from  "@/lib/fetchUser.js";


export default async function Navbar() {

  // welcome user ?
  const user = await fetchUser();


  return (
    <div>
      <div className="navbar">
        <div className="left-section">
          <Home />
        </div>
        <div className="center-section">
          <SearchBar />
        </div>
        <div className="right-section">
          <div className="auth-section">
          {!user.id && (
            <div>
              <LogReg />
            </div>
          )}
              <UserMenu />
          </div>
        </div>
      </div>
      <SideNav />
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