import { Link, useNavigate, useParams } from "react-router";
import Comments from "../Comments/Comments";
import AddComment from "../Comments/AddComment";
import { useDeleteGame, useGame } from "../api/gamesApi";
import useAuth from "../../hooks/useAuth";
import { useComments, useCreateComment } from "../api/commentsApi";

export default function Details() {
  const { gameId } = useParams();
  const { game } = useGame(gameId);
  const { del } = useDeleteGame();
  const navigate = useNavigate();

  const { email, username, _id } = useAuth();
  const { comments, addNewComment } = useComments(gameId);

  const { create } = useCreateComment();

  const onDelHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${game.title} game?`
    );
    if (!hasConfirm) {
      return;
    }
    del(gameId);
    navigate("/games");
  };

  const commentsCreateHandler = async (newComment) => {
    const result = await create(gameId, newComment, email);
    // setComments((oldComments) => [...oldComments, result]);
    addNewComment({ ...result, author: { email, username, _id } });
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <Comments commentsData={comments} />

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {game._ownerId === _id && (
          <div className="buttons">
            <Link to={`/games/${game._id}/edit`} className="button">
              Edit
            </Link>
            <button className="button" onClick={onDelHandler}>
              Delete
            </button>
          </div>
        )}
      </div>

      <AddComment onCreate={commentsCreateHandler} />
    </section>
  );
}
