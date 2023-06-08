import React from "react";

const MoodImage = ({ data }) => {
  const { name, prompt, photo } = data;

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card p-0">
      <img className="w-full h-auto object-cover rounded-xl" src={photo} />
    </div>
  );
};

export default MoodImage;
