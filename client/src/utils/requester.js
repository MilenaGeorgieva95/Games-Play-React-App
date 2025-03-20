const baseUrl = "http://localhost:3030/jsonstore";

export async function requester(method, url, body, id, token) {
  const options = { method };
  if (body) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(body);
  }
  if (token) {
    options.headers["X-Authorization"] = token;
  }
  const reqUrl = id ? `${url}/${id}` : url;
  const response = await fetch(reqUrl, options);
  if (response.status === 204) {
    return response;
  }
  const data = await response.json();
  return data;
}

export const request = {
  get: requester.bind(null, "GET"),
  post: requester.bind(null, "POST"),
  put: requester.bind(null, "PUT"),
  del: requester.bind(null, "DELETE"),
};
