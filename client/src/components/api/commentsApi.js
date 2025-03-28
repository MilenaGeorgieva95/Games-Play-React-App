import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { request } from "../../utils/requester";

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
  return { comments, setComments };
};

export const useCreateComment = () => {
  const { accessToken, _id } = useAuth();
  const create = (gameId, comment) => {
    const body = {
      _ownerId: _id,
      comment,
      gameId,
    };
    return request.post(baseUrl, body, accessToken);
  };
  return { create };
};
