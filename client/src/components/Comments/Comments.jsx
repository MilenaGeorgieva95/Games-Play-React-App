import Commentitem from "./CommentItem";

export default function Comments() {
  return (
    <>
      {/* <!-- Bonus ( for Guests and Users ) --> */}
      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {/* <!-- list all comments for current game (If any) --> */}
          <Commentitem />
        </ul>

        {/* <!-- Display paragraph: If there are no games in the database --> */}
        <p className="no-comment">No comments.</p>
      </div>
    </>
  );
}
