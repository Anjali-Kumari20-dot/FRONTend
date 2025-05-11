import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@ak",
      remarks: "great Job!",
      rating: 4,
    },
  ]);

  let deleteComment = (idx) => {
    setComments((prevComments) => prevComments.filter((_, index) => index !== idx));
  }

  function addNewComment(comment) {
    setComments((currComments) => [...currComments, comment]);
  }
  return (
    <div className="MainView">
        <div className="view">
        <CommentsForm addNewComment={addNewComment} />
      </div>
      <div className="view">
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            &nbsp;
            <p>- {comment.username}</p>
            <i class="fa-solid fa-trash" onClick={() => deleteComment(idx)}></i>
          </div>
        ))}
      </div>
    </div>
  );
}
