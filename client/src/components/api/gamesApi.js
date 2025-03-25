import { useEffect, useState } from "react";
import { request } from "../../utils/requester";
import useAuth from "../../hooks/useAuth";

const baseUrl = "/data/games";

export const useCreateGame = () => {
  const { accessToken } = useAuth();
  const create = (gameData) => {
    return request.post(baseUrl, gameData, accessToken);
  };
  return { create };
};

export const useGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    request.get(baseUrl).then(setGames);
  }, []);
  return { games };
};
export const useGame = (gameId) => {
  const [game, setGame] = useState({});
  useEffect(() => {
    request.get(`${baseUrl}/${gameId}`).then(setGame);
  }, [gameId]);
  return { game };
};
export const useEditGame = () => {
  const { accessToken } = useAuth();

  const edit = (gameId, gameData) =>
    request.put(`${baseUrl}/${gameId}`, gameData, accessToken);
  return { edit };
};
export const useDeleteGame = () => {
  const { accessToken } = useAuth();

  const del = (gameId, gameData) =>
    request.del(`${baseUrl}/${gameId}`, "", accessToken);
  return { del };
};

export const useLatestGames = () => {
  const [latestGames, setGames] = useState([]);

  useEffect(() => {
    const PAGE_SIZE = 3;
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: PAGE_SIZE,
    });

    request.get(`${baseUrl}?${searchParams.toString()}`).then(setGames);
  }, []);
  return { latestGames };
};
