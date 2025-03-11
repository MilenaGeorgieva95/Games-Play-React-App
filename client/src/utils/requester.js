const baseUrl = "http://localhost:3030/jsonstore";

export default async function requester(method, url, body) {
  const options = { method };
  if (body) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(body);
  }
  const response = await fetch(baseUrl + url, options);
  const data = await response.json();
  return data;
}
