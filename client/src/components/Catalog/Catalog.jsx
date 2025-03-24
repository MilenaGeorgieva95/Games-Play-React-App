import CatalogItem from "./CatalogItem";
import { useGames } from "../api/gamesApi";

export default function Catalog() {
  const { games } = useGames();

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length > 0 ? (
        games.map((game) => {
          return <CatalogItem key={game._id} game={game} />;
        })
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}
