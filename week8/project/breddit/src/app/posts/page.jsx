"use client"

import { prisma } from "@/lib/prisma.js";
import Link from "next/link";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bgimg from "@/../public/bgimg.webp";
import JoinSub from "@/components/joinsub";
import Feed from "@/components/feed";
import { useState, useRef, useEffect } from 'react';
import Post from "@/components/Post";


export default function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        fetch('/api/posts')
          .then(response => response.json())
          .then(data => {
            if (data.posts) {
              setPosts(data.posts);
            } else {
              console.error('Unexpected response', data);
            }
          });
    }, []);
    
  
    return (
      <div className="feed-section">
        <h4>feed</h4>
        <div className="posts-list">
            {posts.map((post) => (
                <div key={post.id} className="post-item">
                    <Post key={post.id} post={post} />
                </div>
            ))}
        </div>
      </div>
    );
}



// export default async function Posts( { params }) {

//     const { postId } = params;

//     const post = await prisma.post.findFirst({
//         where: { id: postId },
//         include: { subreddit: true, },
//     });


//     const subreddits = await prisma.post.findMany({ where: { postId } });


//     console.log(post);



//     return (
//         <div className="feed-section">

//             <h4>feed</h4>
//                 <div className="posts-list">
//                     {post.map((post) => (

//                         <div key={post.id} className="post-item">
//                             <Feed />
//                         </div>
//                     ))}        
//                 </div>
//         </div>
//     );
// }


