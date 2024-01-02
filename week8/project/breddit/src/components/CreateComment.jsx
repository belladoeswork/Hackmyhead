"use client"

import { useRouter } from "next/navigation.js";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faComment  } from '@fortawesome/free-regular-svg-icons';


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
        const response = await fetch(`/api/posts/${post.id}/comments`, {
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
        if (showInput) {
            return;
        }
        setShowInput(!showInput);
    }

    const handleCancel = () => {
        setShowInput(false);
        setCommentText("");
    };

 

    return (
        <div>
            <div className="post-comments">
                <FontAwesomeIcon icon={faComment}/>
            </div>  
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
        </div>
    );
}

