import { request } from "../utils/requester";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export default {
  create(email, comment, gameId) {
    console.log(email);

    const body = {
      email,
      comment,
      gameId,
    };
    return request.post(baseUrl, body);
  },
  async getAll(gameId) {
    const res = await request.get(baseUrl);
    const commentsData = Object.values(res);

    const comments = commentsData.filter(
      (comment) => comment.gameId === gameId
    );
    return comments;
  },
};
