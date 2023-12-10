export default function Comment({ comment, index }) {

    const indentation = 50 + index * 30;

    return (
        <div>
            <div className="comment" style={{ marginLeft: `${indentation}px`}} >
            <span className="comment-pin"> 📌 </span>
            <p className="comment-text"> {comment.text} </p>
            </div>
        </div>
    );
}
