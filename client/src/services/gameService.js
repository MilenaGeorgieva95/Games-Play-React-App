const baseUrl = "http://localhost:3030/jsonstore/games";

export default {
  async create(gameData) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    };
    const response = await fetch(baseUrl, options);
    const data = await response.json();
    return data;
  },
};
