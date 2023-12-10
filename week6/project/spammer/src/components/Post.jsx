import DeletePost from "./DeletePost.jsx";
import LikePost from "./LikePost.jsx";
import EditPost from "./EditPost.jsx";
import Comments from "./Comments.jsx";
import NewComment from "./NewComment.jsx";




export default function Post({ post }){

    return (
        <div>
            <div className="post-containers" key={post.id}>
                <div className="post-text">{post.text}</div>
                
                
                <div className="post-buttons-containers">    
                    <LikePost post={post} />
                    <NewComment post={post} />
                    <DeletePost post={post} />
                    <EditPost  post={post} />
                </div>
            </div>
            <div >
                <Comments post={post} />
             </div>
        </div>

    );

}