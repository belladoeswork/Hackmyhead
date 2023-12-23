// "use client"

import Link from "next/link";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import SearchBar from "@/components/SearchBar.jsx";
import LogReg from "@/components/LogReg.jsx";
import UserMenu from "@/components/UserMenu.jsx";
import Home from "@/components/Home.jsx";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bg from "@/../public/redditbg.jpg";
import bgimg from "@/../public/bgimg.webp";

import { fetchUser } from  "@/lib/fetchUser.js";


export default async function SideNav() {

  return (
    <div className="side">
      <div className="side-navbar">
        <Image
            src={bg}
            alt="cover img"
            style={{ objectFit: "cover" }}
            width={250}
            height={90}
        />
        <div className="logo-section">
          <Link href="/">
            <Image src={redditFace} alt="Reddit Logo" className="logo" width={42} height={42} />
          </Link>
          <h4>Home</h4>
        </div>
        <div className="text-section">    
          <p>Your personal Reddit frontpage, built for you.</p>
        </div>
        <div className="buttons-section">
          <button className="buttons-community">Create Community</button>
          <button className="buttons-post">Create Post</button>
        </div>
      </div>
      <div className="communities-section">
        <Image
                src={bgimg}
                alt="cover img"
                style={{ objectFit: "cover" }}
                width={250}
                height={90}
        />
        <div>
            <h4>Communities</h4>
            <div>
                <ol>
                    <li> 
                        <Link href="/">
                            <Image src={redditFace} alt="Reddit Logo" className="comlogo" width={25} height={25} />
                        </Link>
                        <span> r/React </span>
                        <button className="join-bttn">Join</button>
                    </li>
                    <li> 
                        <Link href="/">
                            <Image src={redditFace} alt="Reddit Logo" className="comlogo" width={25} height={25} />
                        </Link>
                        <span> r/Nextjs </span>
                        <button className="join-bttn">Join</button>
                    </li>
                    <li>
                        <Link href="/">
                            <Image src={redditFace} alt="Reddit Logo" className="comlogo" width={25} height={25} />
                        </Link> 
                        <span> r/Food </span>
                        <button className="join-bttn">Join</button>
                    </li>
                    <li>
                        <Link href="/">
                            <Image src={redditFace} alt="Reddit Logo" className="comlogo" width={25} height={25} />
                        </Link> 
                        <span> r/HMH </span>
                        <button className="join-bttn">Join</button>
                    </li>
                </ol>
            </div>
            <div className="class-bttn">
                <Link href="/">
                    <button className="view">View All</button>
                </Link>
            </div>
            
        </div>
      </div>
    </div>
  );
}

