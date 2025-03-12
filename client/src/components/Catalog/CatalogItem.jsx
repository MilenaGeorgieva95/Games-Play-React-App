import { Link } from "react-router";

export default function CatalogItem({ game }) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={game.imageUrl} />
        <h6>Action</h6>
        <h2>{game.title}</h2>
        <Link to={`/games/${game._id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
}
