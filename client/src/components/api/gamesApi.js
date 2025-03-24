import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { request } from "../../utils/requester";

const baseUrl = "/data/games";

// export default {
//   create(gameData) {
//     const data = request.post(baseUrl, gameData);
//     return data;
//   },
//   async getAll() {
//     const data = await request.get(baseUrl);
//     const games = Object.values(data);
//     return games;
//   },
//   async getOne(gameId) {
//     const data = await request.get(`${baseUrl}/${gameId}`, "");
//     return data;
//   },
//   del(gameId) {
//     return request.del(`${baseUrl}/${gameId}`, "");
//   },
//   edit(gameId, gameData) {
//     gameData._id = gameId;
//     return request.put(`${baseUrl}/${gameId}`, gameData);
//   },
// };

export const useCreateGame = () => {
  const { accessToken } = useContext(UserContext);
  const create = (gameData) => {
    return request.post(baseUrl, gameData, accessToken);
  };
  return { create };
};

export const useGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    request.get(baseUrl).then(setGames);
  }, []);
  return { games };
};
