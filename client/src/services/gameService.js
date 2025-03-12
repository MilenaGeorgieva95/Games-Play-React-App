import { gamesRequest } from "../utils/requester";

const url = "/games";

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
};
