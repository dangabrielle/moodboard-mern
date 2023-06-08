import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import NavBar from "../../components/NavBar.jsx";
import { getUser } from "../../utilities/users-service.js";
import "./App.css";
import Collections from "../Collections/Collections.jsx";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/collections" element={<Collections user={user} />} />
            <Route path="/" element={<MainPage user={user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser} />
      )}
    </main>
  );
}

export default App;
