import Post from "./Post.jsx";
import { prisma } from "@/lib/prisma.js";


export default async function Posts() {

  const posts = await prisma.post.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div id="posts-container">
      {posts.map((post) => {
        return (
            <div>
                <Post key={post.id} post={post} />           
            </div>
        );
      })}
    </div>
  );
}


