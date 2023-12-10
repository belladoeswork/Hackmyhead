import { API } from "@/lib/api.js";
import Comment from "./Comment.jsx";

export default async function Comments({ post }) {
        
    const res = await fetch(`${API}/api/posts/${post.id}/comments`, { cache: "no-store" });
    const info = await res.json();

    return (
        <div className="comment-container">
          {info.comments.map((comment, index) => {
            return <Comment key={comment.id} comment={comment} index={index} />;
          })}
        </div>
      );
}
