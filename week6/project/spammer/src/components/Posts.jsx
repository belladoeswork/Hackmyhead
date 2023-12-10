import { API } from "@/lib/api.js";
import Post from "./Post.jsx";
import EditPost from "./EditPost.jsx";


export default async function Posts() {
  const res = await fetch(`${API}/api/posts`, { cache: "no-store" });
  const info = await res.json();
  console.log(info.posts);
  return (
    <div id="posts-container">
      {info.posts.map((post) => {
        return (
            <div>
                <Post key={post.id} post={post} />
                
            </div>
        );
      })}
    </div>
  );
}
