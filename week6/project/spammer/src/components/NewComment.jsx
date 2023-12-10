"use client"

import { API } from "@/lib/api.js";
import { useRouter } from "next/navigation.js";
import { useState } from "react";


export default function NewComment({post}) {

  const [comment, setCommentText] = useState("");

  const [showInput, setShowInput] = useState(false);

  const router = useRouter();


  async function submitComment(event) {

        event.preventDefault();

        if (comment === "") {
            handleCancel();
            return;
        } 
        const response = await fetch(`${API}/api/posts/${post.id}/comments`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            text: comment,
            }),
        });

        const info = await response.json();
            setCommentText("");
            setShowInput(false);
            router.refresh();
    }

    function handleInputChanges(event) {
        setCommentText(event.target.value);
        
    }

    function toggleInput() {
        setShowInput(!showInput);
    }

    const handleCancel = () => {
        setShowInput(false);
        setCommentText("");
    };

 

    return (
        <div className="new-comment-container" >
        <p className="comment-bttn" onClick={toggleInput}>💬</p>
        {showInput && (
            <form className="comment-form" onSubmit={submitComment}>
                <input
                    className="comment-input"
                    type="text"
                    value={comment}
                    onChange={handleInputChanges}
                />
                <div className="comment-buttons">
                    <button type="submit">Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        )}
        </div>
    );
}

