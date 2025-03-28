const host = "http://localhost:3030";

export async function requester(method, url, body, token) {
  const options = {
    method,
  };
  if (body || token) {
    options.headers = {};
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  if (token) {
    options.headers["X-Authorization"] = token;
  }

  try {
    const res = await fetch(`${host}${url}`, options);
    let data;
    if (res.status !== 204) {
      data = await res.json();
    }

    if (res.ok == false) {
      if (res.status === 403) {
        localStorage.clear();
      }
      const error = data;
      throw error;
    }
    return data;
  } catch (error) {
    alert(`Error: ${error.message}`);
    throw error;
  }
}

export const request = {
  get: requester.bind(null, "GET"),
  post: requester.bind(null, "POST"),
  put: requester.bind(null, "PUT"),
  del: requester.bind(null, "DELETE"),
};
