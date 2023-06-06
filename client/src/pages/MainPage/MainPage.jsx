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

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  return (
    <section>
      <h1>What's the mood?</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <MoodForm
            labelName="Your name"
            type="text"
            name="name"
            value={form.name}
            handleChange={handleChange}
          />
          <MoodForm
            labelName="Prompt"
            type="text"
            name="prompt"
            value={form.prompt}
            handleChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
};

export default MainPage;
