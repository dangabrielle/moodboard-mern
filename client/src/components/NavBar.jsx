import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut(); // this removes the token from local storage
    setUser(null);
    //nullify user state
  }

  return (
    <nav>
      <Link to="/collections">collections</Link>
      &nbsp; | &nbsp;
      <Link to="/">Create Mood</Link>
      {user && <p>Welcome, {user.name} </p>}
      {/* shows only if there is a user */}
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
