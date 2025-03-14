import { gamesRequest } from "../utils/requester";

export default {
  create(gameData) {
    const data = gamesRequest.post(gameData);
    return data;
  },
  async getAll() {
    const data = await gamesRequest.get();
    const games = Object.values(data);
    return games;
  },
  async getOne(gameId) {
    const data = await gamesRequest.get("", gameId);
    return data;
  },
  del(gameId) {
    return gamesRequest.del("", gameId);
  },
  edit(gameId, gameData) {
    gameData._id = gameId;
    return gamesRequest.put(gameData, gameId);
  },
};
