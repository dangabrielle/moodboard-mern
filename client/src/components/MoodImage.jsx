import React from "react";

const MoodImage = ({ data }) => {
  const { name, prompt, photo } = data;

  return (
    <div className="rounded-xl group relative shadow-2xl shadow-card hover:shadow-cardhover card p-0">
      <img
        className="w-full h-auto object-cover shadow-2xl rounded-xl border-4 border-blue-50"
        src={photo}
      />
    </div>
  );
};

export default MoodImage;
