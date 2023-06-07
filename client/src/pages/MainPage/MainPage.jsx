import React, { useState, useEffect } from "react";
import MoodForm from "../../components/MoodForm";
import MoodImage from "../../components/MoodImage";

const MainPage = () => {
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

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // e.target: <input class="bg-slate-200 rounded-lg" placeholder="Enter your name" type="text" id="name" name="name" required="" value="hhhj">
  };

  return (
    <section>
      <h1>What's the mood?</h1>
      <div>
        <form onSubmit={handleSubmit}>
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
          <div>
            {form.photo ? <img src={form.photo} /> : "Placeholder image"}
          </div>
          <button type="button" onClick={createImg}>
            {img ? "Creating your mood" : "Create btn"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MainPage;
