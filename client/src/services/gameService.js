import requester from "../utils/requester";

export default {
  create(gameData) {
    const data = requester("POST", "/games", gameData);
    return data;
  },
};
