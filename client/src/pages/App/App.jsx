import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <MainPage />
    </>
  );
}

export default App;
