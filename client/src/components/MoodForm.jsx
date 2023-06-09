import React, { useState } from "react";

const MoodForm = ({
  labelName,
  type,
  name,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="p-3">
      <label htmlFor={name}> {labelName}</label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default MoodForm;
