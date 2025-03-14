import Commentitem from "./CommentItem";

export default function Comments({ commentsData }) {
  return (
    <>
      {/* <!-- Bonus ( for Guests and Users ) --> */}
      <div className="details-comments">
        <h2>Comments:</h2>
        {commentsData.length > 0 ? (
          <ul>
            {commentsData.map((comment) => (
              <Commentitem key={comment._id} comment={comment} />
            ))}
          </ul>
        ) : (
          <p className="no-comment">No comments.</p>
        )}
      </div>
    </>
  );
}
