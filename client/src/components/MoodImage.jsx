import React from "react";

const MoodImage = ({ data }) => {
  const { name, prompt, photo } = data;

  return (
    <div className="rounded-xl h-full group relative shadow-2xl shadow-card hover:shadow-cardhover card p-0 ">
      <img
        className="w-full relative h-full object-cover rounded-xl border-4 border-blue-50 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        src={photo}
      />
      <div className="group-hover:flex max-h-[94.5%] flex-col hidden absolute bottom-0 left-0 right-0 bg-[#6b7280a7] m-2 p-4 rounded-md">
        <p className="text-white text-sm  ">{prompt}</p>
        <p className="text-white text-sm  ">{name}</p>
      </div>
    </div>
  );
};

export default MoodImage;
