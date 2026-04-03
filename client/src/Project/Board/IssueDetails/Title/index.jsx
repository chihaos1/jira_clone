import React, { useState } from 'react';

const TitleInput = ({ initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);
  const maxLength = 100;

  const handleChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setTitle(event.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="Enter issue title"
      />
      <div>{title.length}/{maxLength}</div>
    </div>
  );
};

export default TitleInput;
