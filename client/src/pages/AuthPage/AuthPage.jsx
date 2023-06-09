import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";
import logo from "../../assets/moodboard-logo.png";
import { useState } from "react";

export default function AuthPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="bg-fit">
      <div className="flex justify-center items-center  gap-10 mt-10 mb-10">
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
        <button
          className="m-3 inline-block rounded bg-emerald-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-emerald-200 hover:text-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "SIGN UP" : "LOG IN"}
        </button>
      </div>
    </main>
  );
}
