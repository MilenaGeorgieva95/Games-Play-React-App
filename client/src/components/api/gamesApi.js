import { useEffect, useState } from "react";
import { request } from "../../utils/requester";
import useAuth from "../../hooks/useAuth";

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
  const { accessToken } = useAuth();
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
export const useGame = (gameId) => {
  const [game, setGame] = useState({});
  useEffect(() => {
    request.get(`${baseUrl}/${gameId}`).then(setGame);
  }, [gameId]);
  return { game };
};
export const useEditGame = () => {
  const { accessToken } = useAuth();

  const edit = (gameId, gameData) =>
    request.put(`${baseUrl}/${gameId}`, gameData, accessToken);
  return { edit };
};
export const useDeleteGame = () => {
  const { accessToken } = useAuth();

  const del = (gameId, gameData) =>
    request.del(`${baseUrl}/${gameId}`, "", accessToken);
  return { del };
};
