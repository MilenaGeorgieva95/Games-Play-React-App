import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Comments from "../Comments/Comments";
import AddComment from "../Comments/AddComment";
import commentService from "../../services/commentService";
import { useDeleteGame, useGame } from "../api/gamesApi";
import useAuth from "../../hooks/useAuth";

export default function Details() {
  const { gameId } = useParams();
  const { game } = useGame(gameId);
  const { del } = useDeleteGame();
  const [commentsData, setCommentsData] = useState([]);
  const navigate = useNavigate();

  const { email } = useAuth();

  useEffect(() => {
    commentService.getAll(gameId).then((data) => setCommentsData(data));
  }, []);

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

  const commentsCreateHandler = (newComment) => {
    setCommentsData((oldComments) => [...oldComments, newComment]);
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

        <Comments commentsData={commentsData} email={email} />

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
          <Link to={`/games/${game._id}/edit`} className="button">
            Edit
          </Link>
          <button className="button" onClick={onDelHandler}>
            Delete
          </button>
        </div>
      </div>

      <AddComment
        email={email}
        gameId={gameId}
        onCreate={commentsCreateHandler}
      />
    </section>
  );
}
