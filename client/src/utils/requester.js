const baseUrl = "http://localhost:3030/jsonstore";

export async function requester(method, url, body, id, token) {
  console.log(token);

  const options = { method };
  if (token) {
    options.headers["X-Authorization"] = token;
  }
  if (body) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(body);
  }

  const reqUrl = id ? `${url}/${id}` : url;

  try {
    const response = await fetch(reqUrl, options);
    if (response.status === 204) {
      return response;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const request = {
  get: requester.bind(null, "GET"),
  post: requester.bind(null, "POST"),
  put: requester.bind(null, "PUT"),
  del: requester.bind(null, "DELETE"),
};
