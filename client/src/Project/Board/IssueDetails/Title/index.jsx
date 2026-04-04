import React, { useState } from 'react';

const TitleInput = ({ initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);
  const [charCount, setCharCount] = useState(initialTitle.length);
  const maxChars = 100;

  const handleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= maxChars) {
      setTitle(newTitle);
      setCharCount(newTitle.length);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter issue title"
      />
      <div>{charCount}/{maxChars} characters</div>
    </div>
  );
};

export default TitleInput;
