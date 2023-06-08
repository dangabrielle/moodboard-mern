import React, { useState, useEffect } from "react";
import MoodForm from "../../components/MoodForm";
import MoodImage from "../../components/MoodImage";
import bookAnimation from "../../assets/bookAnimation.gif";
import { useNavigate } from "react-router-dom";

const MainPage = ({ user }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [img, setImg] = useState(false);

  const createImg = async () => {
    if (form.prompt) {
      try {
        setImg(true);
        const res = await fetch("http://localhost:3001/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await res.json();
        setForm({ ...form, photo: data.photo });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/collections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: user._id,
        },
        body: JSON.stringify(form),
      });
      await res.json();
      navigate("/collections");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // e.target: <input class="bg-slate-200 rounded-lg" placeholder="Enter your name" type="text" id="name" name="name" required="" value="hhhj">
  };

  return (
    <section className="flex flex-col justify-items-center">
      <h1>What's the mood?</h1>
      <div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <MoodForm
            labelName="Your name"
            placeholder="Enter your name"
            type="text"
            name="name"
            value={form.name}
            handleChange={handleChange}
          />
          <MoodForm
            labelName="Prompt"
            placeholder="A penguin in an igloo"
            type="text"
            name="prompt"
            value={form.prompt}
            handleChange={handleChange}
          />

          <div className="place-content-center max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 m-0">
            {form.photo ? (
              <img src={form.photo} />
            ) : (
              <div>
                <img
                  src={bookAnimation}
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20"
                />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">
                  Noteworthy technology acquisitions 2021
                </h5>
              </div>
            )}
          </div>
          <button type="button" onClick={createImg}>
            {img ? "What a mood!" : "Create Mood Card"}
          </button>
          <div>
            Add this to your collection
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default MainPage;
