export default function Comments({ commentsData }) {
  return (
    <>
      {/* <!-- Bonus ( for Guests and Users ) --> */}
      <div className="details-comments">
        <h2>Comments:</h2>
        {commentsData.length > 0 ? (
          <ul>
            {commentsData.map((comment) => (
              <li
                key={comment._id}
                className={`comment${comment.pending ? " pendingComment" : ""}`}
              >
                <p>{comment.author.email}</p>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comment">No comments.</p>
        )}
      </div>
    </>
  );
}
