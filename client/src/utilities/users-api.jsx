import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

//res = response, fetch() second arg uses options object to make requests other than basic GET requests, includes data, headers, etc. in this case, fetch is pushing out a request instead of retrieving data. in this case, this piece of code is used to make an http request to a server. the await keyword is used to wait for the response to be returned before continuing. BASE_URL is a constant that contains the URL of the server you want to request data from.

// signUp() takes 'userData' as a paramater. 'userData' is an object that includes properties such as name, email address, password, etc needed to create or update a user account.

// res.ok() is a method used to send a simple response indicating that a request was successfull

//json.stringify() is a built in js method to convert a js object or value into a json string

// throw new Error(): 'Error' constructor is a built in js function that creates an error object with a specified message. the 'new' keyword creates a new instance of the Error object and the message is passed as a string param. 'throw' throws an error object and causes js engine to stop executing

// users-api is an api that provides endpoints for managing users in a software app. endpoiints include methods for creating, reading, updating, deleting user accounts, and methods for retrieving info about users
