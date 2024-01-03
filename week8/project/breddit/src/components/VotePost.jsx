"use client"

import { useRouter } from "next/navigation.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser, faComment  } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faShare, faEllipsisH, faLongArrowAltUp, faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons';


export default function VotePost({ post }) {

    const router = useRouter();

    async function handleUpButton() {

        const response = await fetch(`/api/votes`, {
            method: "POST",
            cache: "no-store",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId: post.id, userId: user.id, isUpvote: true }), 
        });
        const info = await response.json();
        
        router.refresh();
    }

    async function handleDownButton() {

        const response = await fetch(`/api/votes`, {
            method: "POST",
            cache: "no-store",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId: post.id, userId: user.id, isUpvote: false }), 
        });
        const info = await response.json();
        
        router.refresh();
    }

    const votesCount = post.votes.reduce((count, vote) => count + (vote.isUpvote ? 1 : -1), 0);



    return (
        <div className="post-votes">
            <div className="up-votes">
                <FontAwesomeIcon icon={faLongArrowAltUp}  onClick={handleUpButton} />
            </div>
            <p> {votesCount}</p>
            <div className="down-votes">
                <FontAwesomeIcon icon={faLongArrowAltDown}  onClick={handleDownButton}/>
            </div>
        </div> 
    );
}


