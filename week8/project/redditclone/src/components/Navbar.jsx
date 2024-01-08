
import Link from "next/link";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import SearchBar from "@/components/SearchBar.jsx";
import LogReg from "@/components/LogReg.jsx";
import UserMenu from "@/components/UserMenu.jsx";
import Home from "@/components/Home.jsx";
import SideNav from "@/components/SideNav.jsx";
import subreddits from "@/app/subreddits/page";



import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import { fetchUser } from  "@/lib/fetchUser.js";


export default async function Navbar() {

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
            {!user.id ? <LogReg /> : <UserMenu userUpdated={false} />}
          </div>
        </div>
      </div>
      <SideNav />
      {/* <Link href={"/subreddits"}>Subreddits</Link> */}
    </div>
  );
}

