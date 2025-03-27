// import { request } from "../utils/requester";

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { request } from "../../utils/requester";

// export default {
//   create(email, comment, gameId) {
//     const body = {
//       email,
//       comment,
//       gameId,
//     };
//     return request.post(baseUrl, body);
//   },
//   async getAll(gameId) {
//     const res = await request.get(baseUrl);
//     const commentsData = Object.values(res);

//     const comments = commentsData.filter(
//       (comment) => comment.gameId === gameId
//     );
//     return comments;
//   },
// };

const baseUrl = "/data/comments";

export const useComments = (gameId) => {
  const [comments, setComments] = useState([]);
  const { accessToken } = useAuth();
  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `gameId="${gameId}"`,
    });
    request.get(`${baseUrl}?${searchParams.toString()}`).then(setComments);
  }, [accessToken, gameId]);
  return { comments };
};

export const useCreateComment = () => {
  const { accessToken } = useAuth();
  const create = (email, comment, gameId) => {
    const body = {
      email,
      comment,
      gameId,
    };
    return request.post(baseUrl, body, accessToken);
  };
  return { create };
};
