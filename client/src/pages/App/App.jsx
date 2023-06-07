import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import NavBar from "../../components/NavBar.jsx";
import { getUser } from "../../utilities/users-service.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(true);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
            <Route path="/mood" element={<MainPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser} />
      )}
    </main>
  );
}

export default App;
