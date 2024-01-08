import { prisma } from "@/lib/prisma.js";
import Comment from "./Comment.jsx";

export default async function Comments({ post }) {

    const comments = await prisma.comment.findMany( {
      where: {
        postId: post.id,
      },
      orderBy: {
        createAt: "desc",
      },
  });

    return (
        <div className="comment-container">
          {comments.map((comment, index) => {
            return <Comment key={comment.id} comment={comment} index={index} />;
          })}
        </div>
      );
}
