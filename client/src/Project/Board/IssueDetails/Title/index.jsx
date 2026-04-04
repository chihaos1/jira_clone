import React, { useState } from 'react';

function Title(props) {
  const [title, setTitle] = useState(props.title || '');
  const [charCount, setCharCount] = useState(title.length);
  const maxChars = 100;

  const handleChange = (event) => {
    const newTitle = event.target.value;
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
}

export default Title;
