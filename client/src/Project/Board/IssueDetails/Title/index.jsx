import React, { useState } from 'react';

function Title(props) {
  const [title, setTitle] = useState(props.title || '');
  const maxTitleLength = 100;

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        maxLength={maxTitleLength}
        placeholder="Enter issue title"
      />
      <div>
        {title.length}/{maxTitleLength} characters
      </div>
    </div>
  );
}

export default Title;
