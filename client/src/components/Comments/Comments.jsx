import { useEffect, useState } from "react";
import Commentitem from "./CommentItem";
import commentService from "../../services/commentService";

export default function Comments({ gameId }) {
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    commentService.getAll(gameId).then((data) => setCommentsData(data));
  }, []);
  return (
    <>
      {/* <!-- Bonus ( for Guests and Users ) --> */}
      <div className="details-comments">
        <h2>Comments:</h2>
        {commentsData.length > 0 ? (
          <ul>
            {commentsData.map((comment) => (
              <Commentitem comment={comment} />
            ))}
          </ul>
        ) : (
          <p className="no-comment">No comments.</p>
        )}
      </div>
    </>
  );
}
