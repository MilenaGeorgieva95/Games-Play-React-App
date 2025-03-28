import { useEffect, useReducer, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { request } from "../../utils/requester";

const baseUrl = "/data/comments";

function commentsReducer(state, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "GET_ALL":
      return action.payload;
    default:
      return state;
  }
}

export const useComments = (gameId) => {
  // const [comments, setComments] = useState([]);
  const [comments, dispatch] = useReducer(commentsReducer, []);
  const { accessToken } = useAuth();
  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `gameId="${gameId}"`,
      load: "author=_ownerId:users",
    });
    request
      .get(`${baseUrl}?${searchParams.toString()}`)
      .then((result) => dispatch({ type: "GET_ALL", payload: result }));
  }, [accessToken, gameId]);
  return {
    comments,
    addNewComment: (commentData) =>
      dispatch({ type: "ADD_COMMENT", payload: commentData }),
  };
};

export const useCreateComment = () => {
  const { accessToken, _id } = useAuth();
  const create = (gameId, comment, email) => {
    const body = {
      _ownerId: _id,
      comment,
      gameId,
      email,
    };
    return request.post(baseUrl, body, accessToken);
  };
  return { create };
};
