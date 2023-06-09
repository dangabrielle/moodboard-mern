import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import logo from "../assets/moodboard-logo.png";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut(); // this removes the token from local storage
    setUser(null);
    //nullify user state
  }

  return (
    <nav className="flex flex-col justify-center items-center gap-10">
      <img
        src={logo}
        width="200"
        className="rounded-full border-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]"
      />
      <div>
        <h1 className="text-6xl text-white color outline-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          MOOD BOARD AI
        </h1>
        <div className="mb-5 mt-5">
          <Link
            to="/collections"
            className="hover:bg-cyan-200 rounded-xl pl-3 pr-3"
          >
            Collections
          </Link>
          &nbsp; | &nbsp;
          <Link to="/" className="hover:bg-cyan-200 rounded-xl pl-3 pr-3">
            Create Mood
          </Link>
          &nbsp; | &nbsp;
          <Link
            to=""
            className="hover:bg-cyan-200 rounded-xl pl-3 pr-3"
            onClick={handleLogOut}
          >
            Log Out
          </Link>
        </div>
        <hr />
        <div className="m-10 bg-white  p-3 rounded-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.7)]">
          {user && <p>Hi there, {user.name} </p>}
          <p>
            Welcome to your own personal moodboard.
            <br />
            Create AI images based on how you're feeling today.
          </p>
        </div>
      </div>
    </nav>
  );
}
