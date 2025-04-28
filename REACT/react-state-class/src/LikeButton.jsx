import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked == true) {
      setClicks(clicks + 1);
    }
  };

  let styles = {
    color: "red",
  };
  return (
    <div>
      <h2>
        Express Your <i style={styles} className="fa-solid fa-heart"></i> with a
        click!
      </h2>
      <h1 style={styles} onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
      <h1>{isLiked ? `${clicks} Likes` : `${clicks} Likes`} </h1>
    </div>
  );
}
