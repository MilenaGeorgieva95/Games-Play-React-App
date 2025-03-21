import { request } from "../utils/requester";

const baseUrl = "/jsonstore/games";

export default {
  create(gameData) {
    const data = request.post(baseUrl, gameData);
    return data;
  },
  async getAll() {
    const data = await request.get(baseUrl);
    const games = Object.values(data);
    return games;
  },
  async getOne(gameId) {
    const data = await request.get(`${baseUrl}/${gameId}`, "");
    return data;
  },
  del(gameId) {
    return request.del(`${baseUrl}/${gameId}`, "");
  },
  edit(gameId, gameData) {
    gameData._id = gameId;
    return request.put(`${baseUrl}/${gameId}`, gameData);
  },
};
