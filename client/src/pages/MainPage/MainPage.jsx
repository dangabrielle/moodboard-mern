import React, { useState, useEffect } from "react";
import MoodForm from "../../components/MoodForm";
import MoodImage from "../../components/MoodImage";
import bookAnimation from "../../assets/bookAnimation.gif";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

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
          className="flex flex-col justify-center items-center "
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

          <div className="relative place-content-center max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 m-0">
            {form.photo ? (
              <img src={form.photo} />
            ) : (
              <div>
                <img
                  src={bookAnimation}
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-50"
                />
                {img && (
                  <div className="absolute inset-0 z-0 rounded-lg bg-[rgba(0,0,0,0.1)] ">
                    <Loader />
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            className="m-5 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            type="button"
            onClick={createImg}
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>

            {img ? "What a mood!" : "Create Mood Card"}
          </button>
          <div className="m-5">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              type="submit"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to your mood collection
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default MainPage;

<a
  href="#_"
  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
>
  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </span>
  <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
    Button Text
  </span>
  <span class="relative invisible">Button Text</span>
</a>;
