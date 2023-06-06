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
    <div>
      <label htmlFor={name}> {labelName}</label>
      <input
        className="bg-slate-200 rounded-lg"
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
