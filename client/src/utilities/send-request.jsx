import { getToken } from "./users-service";
// SENDING HTTP REQ TO THE BACKEND
export default async function sendRequest(url, method = "GET", payload = null) {
  // fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    options.headers ||= {};

    // '||=' is the nullish operator. equates to 'options.headers = options.headers || {}' -- the OR operator will return the left hand operand if the L side of truthy, otherwise it will default to the right hand operand ≈

    // prefacing with "Bearer " is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  //   The Authorization header is a standard HTTP header that is used to provide authentication credentials in a request. Part of token based auth.

  // By setting the Authorization header to a Bearer token, this code is indicating to the server that the client making the request is authorized to access the requested resource. The server can use the token to authenticate the client and determine whether it has the necessary permissions to access the requested resource.

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
// fetch sends an http request to the servr with provided url and options object
