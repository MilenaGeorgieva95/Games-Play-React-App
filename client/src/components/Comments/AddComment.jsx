import commentService from "../../services/commentService";

export default function AddComment({ email, gameId, onCreate }) {
  const commentAction = async (formData) => {
    const comment = formData.get("comment");
    
    const newComment = await commentService.create(email, comment, gameId);
    onCreate(newComment);
  };

  return (
    <>
      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" action={commentAction}>
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </>
  );
}
