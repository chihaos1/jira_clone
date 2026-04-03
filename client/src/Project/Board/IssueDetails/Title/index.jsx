import React, { useState } from 'react';

const Title = ({ initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);
  const [charCount, setCharCount] = useState(initialTitle.length);
  const maxChars = 100;

  const handleTitleChange = (e) => {
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
        onChange={handleTitleChange}
        placeholder="Enter issue title"
      />
      <div>{charCount}/{maxChars} characters</div>
    </div>
  );
};

export default Title;
