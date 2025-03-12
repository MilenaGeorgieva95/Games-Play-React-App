import { useEffect, useState } from "react";
import gameService from "../../services/gameService";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    gameService.getAll().then((data) => {
      console.log(data);
      setGamesData(data);
    });
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {gamesData.length > 0 ? (
        gamesData.map((game) => {
          return <CatalogItem key={game._id} game={game} />;
        })
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}
