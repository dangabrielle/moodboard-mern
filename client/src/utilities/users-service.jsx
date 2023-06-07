import * as userAPI from "./users-api";

export async function signUp(userData) {
  const token = await userAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  // attempt get the tokem from localstorage
  const token = localStorage.getItem("token");
  if (!token) return null;
  // if a token is retrieved
  // decode the payload from the token so we can check if it's still valid
  const payload = JSON.parse(atob(token.split(".")[1]));
  // (check if it's expired or not)
  if (payload.exp < Date.now() / 1000) {
    // remove the token from localstorage
    localStorage.removeItem("token");
    return null;
  }
  // if still valid, we return the retrieved token
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export async function login(userData) {
  const token = await userAPI.login(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem("token");
}

export function checkToken() {
  // Just so that you don't forget how to use.then
  return (
    userAPI
      .checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}

/*
    {
        iat: 1525355525,
        exp: 1525355765,
        user: {
            name: 'jane'
            email: 'jane@email.com',
            createdAt: '2023-05-10',
            updatedAt: '2023-05-10',
            ObjectId: 'ui92tetg2g872giu272',
        }
    }
*/

// PAYLOAD:
// {
//   iat: 3847984 (issuance at)
//   exp: 458938745
//   user: {
//     name: 'jane',
//     email: 'jane@gmail.com',
//     createdAt: ''
//     updatedAt: ''
//     ObjectId: ''
//   }
// }

// userAPI is an obj that contains methods for interacting with a server-side API related to user management and authentication. methods include http requests to the server to perform CRUD operations on

// token: piece of data used to authenticate and authorize access to resources or functionality. commonly used to identify and verify identity of a user or a client making a request to a server

// tokens can take different forms but often consist of a long string of random characters that are difficult to guess. the server maintains a record of all valid tokens and uses them to grant or deny access to resources

// users-service is a software component that provides functionality for managing users. such as interacting with a databse to store user info, handle authentication

// implement business logic for managing users whereas users-api would provide a public interface to that functionality
