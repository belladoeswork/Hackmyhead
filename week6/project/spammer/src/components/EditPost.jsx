"use client"

import { API } from "@/lib/api.js";
import { useRouter } from "next/navigation.js";
import { useState, useEffect, useRef } from "react";


export default function EditPost({ post }) {
    const [isEditing, setIsEditing] = useState(false);
    const [postText, setPostText] = useState(post.text);
    const router = useRouter();
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
        inputRef.current.focus();
        }
    }, [isEditing]);

    const handleInputChanges = (event) => {
        setPostText(event.target.value);
    };

    const toggleInput = () => {
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const saveEdit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${API}/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: postText,
            }),
        });

        if (response.ok) {
            setIsEditing(false);
            router.refresh();
        }
    };


    return (
        <div className="edit-post-container">
          <p className="edit" onClick={toggleInput}>✍️</p>
          {isEditing && (
            <form className="edit-post-form" onSubmit={saveEdit}>
            
                <input
                    ref={inputRef}
                    className="text-input"
                    type="text"
                    value={postText}
                    onChange={handleInputChanges}
                />
            
                <div className="edit-buttons">
                    <button type="submit">Edit Post</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>

            </form>
            )}
            
        </div>
    );
}