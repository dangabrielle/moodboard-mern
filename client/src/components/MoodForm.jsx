import React, { useState } from "react";

const MoodForm = ({ labelName, type, name, value, handleChange }) => {
  return (
    <div>
      MoodForm
      <label htmlFor={name}> {labelName}</label>
      <input
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
