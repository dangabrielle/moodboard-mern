// LoginForm.jsx

import { useState } from "react";
import * as usersService from "../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="form-container flex flex-col justify-center items-center gap-2"
        >
          <label>Email</label>
          <input
            className="appearance-none block w-[30%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="email"
            value={credentials.email}
            placeholder="hello@email.com"
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            className="appearance-none block w-[30%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="**********"
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
