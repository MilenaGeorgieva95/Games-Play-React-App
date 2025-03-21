const host = "http://localhost:3030";

export async function requester(method, url, body, userCtx) {
  const options = {
    method,
    headers: {},
  };

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const userData = userCtx;
  if (userData && userData.accessToken) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const res = await fetch(`${host}${url}`, options);
    let data;
    if (res.status !== 204) {
      data = await res.json();
    }

    if (res.ok == false) {
      if (res.status === 403) {
        // clearUserData();
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
