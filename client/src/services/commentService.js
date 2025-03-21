import { request } from "../utils/requester";

const baseUrl = "/jsonstore/comments";

export default {
  create(email, comment, gameId) {
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
