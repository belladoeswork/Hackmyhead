"use client"

import { prisma } from "@/lib/prisma.js";
import Link from "next/link";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bgimg from "@/../public/bgimg.webp";
import JoinSub from "@/components/JoinSub.jsx";
import Feed from "@/components/Feed.jsx";
import { useState, useRef, useEffect } from 'react';
import Post from "@/components/Post.jsx";
import SortPostsBy from "@/components/SortPostsBy.jsx";


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

    const handleSort = (option) => {

      let sortedPosts;

      if (option === 'subreddit') {
        sortedPosts = [...posts].sort((a, b) => a.subreddit.name.localeCompare(b.subreddit.name));
      } else if (option === 'new') {
        sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
      setPosts(sortedPosts);
    };
  
    
  
    return (
      <div className="feed-section">
        <h4>feed</h4>
        <SortPostsBy onSort={handleSort} />
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


