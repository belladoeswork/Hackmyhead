"use client"

// import Link from "next/link";
// import Login from "@/app/login/page";
// import Register from "@/app/register/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation.js";
import { useState } from "react";


export default function SearchInput() {

    const [query, setQuery] = useState('');
    const router = useRouter();

    // const postResults;
    // const userResults;
    // const subredditResults;

    const handleInputChange = (newValue) => {
        setQuery(newValue);
    };

    const handleOptionChange = () => {
        if (option) {
        // redir to url with router.push?
        }
    }


    return (
        <div className="navbar">
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} style={{ marginRight: "10px" }} />
                <input className="search-bar" type="text" placeholder="Search Reddit" value={query} onChange={(e) => handleInputChange(e.target.value)}/>
            </div>
        </div>
    );
}


