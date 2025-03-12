import { gamesRequest } from "../utils/requester";

const url = "/games";

export default {
  create(gameData) {
    const data = gamesRequest.post(gameData);
    return data;
  },
  getAll() {
    const data = gamesRequest.get();
    console.log(data);

    return data;
  },
};
