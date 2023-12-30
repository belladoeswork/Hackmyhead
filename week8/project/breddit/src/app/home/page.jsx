import React from 'react'
import Navbar from "@/components/Navbar.jsx";
import Subreddits from "@/app/subreddits/page";
import SideBar from '@/app/sidebar/page';

import Feed from "@/components/Feed.jsx";


export default function Home() {

    return (
        <div>
            <Navbar/>
            <Subreddits />
            <SideBar userLoggedIn={false} />
            <Feed />
        </div>
    )
}