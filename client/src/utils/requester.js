const baseUrl = "http://localhost:3030/jsonstore";

export async function requester(method, url, body, id) {
  const options = { method };
  if (body) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(body);
  }
  const reqUrl = id ? `${baseUrl}${url}/${id}` : `${baseUrl}${url}`;
  const response = await fetch(reqUrl, options);
  if (response.status === 204) {
    return response;
  }
  const data = await response.json();
  return data;
}

const gamesUrl = "/games";

export const gamesRequest = {
  get: requester.bind(null, "GET", gamesUrl),
  post: requester.bind(null, "POST", gamesUrl),
  put: requester.bind(null, "PUT", gamesUrl),
  del: requester.bind(null, "DELETE", gamesUrl),
};
