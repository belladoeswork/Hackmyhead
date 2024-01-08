"use client"

import { useRouter } from "next/navigation.js";

export default function DeletePost({ post }) {
  const router = useRouter();
  async function handleDeleteButton() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    const info = await response.json();
    
    router.refresh();
  }
  return (
    <p className="delete" onClick={handleDeleteButton}>
      🗑️
    </p>
  );
}
