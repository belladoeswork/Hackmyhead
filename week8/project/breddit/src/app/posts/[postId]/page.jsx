"use client"

import { prisma } from "@/lib/prisma.js";
import Link from "next/link";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bgimg from "@/../public/bgimg.webp";
import JoinSub from "@/components/JoinSub.jsx";
import Feed from "@/components/feed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faArrorRightFromBracket, faSquarePen, faTrashCan, faArrowUpFromBracket , faUpLong, faDownLong, faEllipsis, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export default function PostPage() {
//     const router = useRouter();
//     const { postId } = router.query;
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         const fetchPost = async () => {
//             if (postId) {
//                 const response = await fetch(`/api/posts/${postId}`)
//                 const data = await response.json();
//                 setPost(data.post);
//             }
//     );
//             fetch

//     }, [postId]);

//     if (!post) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="post-container">
//             <div className="post-header">
//                 <div className="left-header">
//                     <FontAwesomeIcon icon={faRedditAlien} size="2x" /> 
//                     <p className="post-sub"> r/{post.subreddit?.name} </p>
//                     <p className="post-info">· {formatTimeAgo(new Date(post.createAt))} </p>
//                 </div>
//                 <div className="right-header">
//                     <button className="post-bttn">Join</button>
//                     <div className="icon-wrapper">
//                         <FontAwesomeIcon icon={faEllipsis} />
//                     </div>
//                 </div>   
//             </div>
//             <h4 className="post-title">{post.title}</h4>
//             <p className="post-content">{post.content}</p>
//             <div className="post-footer">
//                 <div className="post-votes">
//                     <div className="up-votes">
//                         <FontAwesomeIcon icon={faLongArrowAltUp} />
//                     </div>
//                     <p> {post.votes}</p>
//                     <div className="down-votes">
//                         <FontAwesomeIcon icon={faLongArrowAltDown} />
//                     </div> 
//                 </div>
//                 <div className="post-comments">
//                     <FontAwesomeIcon icon={faComment}/> 
//                 </div>
//                 <div className="post-share">
//                     <FontAwesomeIcon icon={faShare}/>  Share 
//                 </div>
//                 <div className="display-comments">
//                     {post.comments && post.comments.map((comment) => (
//                         <div key={comment.id}>
//                             <p>{comment.text}</p>
//                             <p>Posted by {comment.user.name}</p>
//                         </div>
//                     ))}
//                 </div> 
//             </div>
//         </div>
//     );
// }






// import { prisma } from "@/lib/prisma.js";

// export default async function PostPages({ params }) {
//     // comments associated postId
//     const { postId } = params;

//     const post = await prisma.post.findUnique({
//         where: { id: postId },
//         include: {
//             subreddit: true,
//             user: true,
//             comments: {
//                 include: {
//                   user: true,
//                 }, 
//             },
//         },
//     });

//     return (
        
//         <div className="display-comments">
//             {post.comments && post.comments.map((comment) => (
//                 <div key={comment.id}>
//                     <p>{comment.text}</p>
//                     <p>Posted by {comment.user.name}</p>
//                 </div>
//             ))}
//         </div> 
//     );
// }


import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';


export default function PostPages() {
    const router = useRouter();
    const { postId } = router.query;
    const [post, setPost] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            if (postId) {
                try {
                    const response = await fetch(`/api/posts/${postId}`);
                    if (!response.ok) {
                        const message = `An error has occurred: ${response.status}`;
                        throw new Error(message);
                    }
                    const data = await response.json();
                    setPost(data.post);
                } catch (error) {
                    console.error(error.message);
                }
            }
        }

        fetchData();
    }, [postId]);


    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="display-comments">
            {post.comments && post.comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <p>Posted by {comment.user.name}</p>
                </div>
            ))}
        </div> 
    );
}