import Commentitem from "./CommentItem";

export default function Comments({ commentsData, email }) {
  return (
    <>
      {/* <!-- Bonus ( for Guests and Users ) --> */}
      <div className="details-comments">
        <h2>Comments:</h2>
        {commentsData.length > 0 ? (
          <ul>
            {commentsData.map((comment) => (
              <Commentitem key={comment._id} comment={comment} email={email} />
            ))}
          </ul>
        ) : (
          <p className="no-comment">No comments.</p>
        )}
      </div>
    </>
  );
}
