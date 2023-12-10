"use client"

import { useRouter } from "next/navigation.js";
import { API } from "@/lib/api.js";


export default function LikePost({ post }) {

    const router = useRouter();

    async function handleLikeButton() {

        const response = await fetch(`${API}/api/posts/${post.id}/likes`, {
            method: "POST",
            cache: "no-store",
        });
        const info = await response.json();
        
        router.refresh();
    }
    return (
        <p className="like" onClick={handleLikeButton}>{post.likes} 👍</p>
    );
}

