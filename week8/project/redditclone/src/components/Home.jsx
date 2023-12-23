"use client"

import Link from "next/link";
import Image from "next/image";
import redditFace from "@/../public/redditFace.svg";
import redditText from "@/../public/redditText.svg"; 



export default function Home() {


    return (
        <div className="home-container">
            <Link href="/">
                <Image src={redditFace} alt="Reddit Logo" className="logo" width={42} height={42} />
                <Image src={redditText} alt="Reddit Text" className="logo-text" width={62} height={42} />
            </Link>
        </div>
    );

}

