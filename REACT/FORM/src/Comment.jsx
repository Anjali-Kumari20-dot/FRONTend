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
          </div>
        ))}
      </div>
    </div>
  );
}
