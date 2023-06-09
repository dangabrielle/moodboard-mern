import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";
import logo from "../../assets/moodboard-logo.png";
import { useState } from "react";

export default function AuthPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div className="flex justify-center items-center gap-10 m-10 mb-20">
        <img
          src={logo}
          width="200"
          className="rounded-full border-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]"
        />
        <h1 className="text-6xl text-white color outline-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          MOOD BOARD AI
        </h1>
      </div>
      <div>
        {showLogin ? (
          <LoginForm setUser={setUser} user={user} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
        <h3>Are you a User?</h3>
        <button className="auth-btn" onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </button>
      </div>
    </main>
  );
}
