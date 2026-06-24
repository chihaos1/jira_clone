import React, { useState } from 'react';

function Title(props) {
  const [title, setTitle] = useState(props.title || '');
  const maxTitleLength = 100;

  const handleTitleChange = (event) => {
    if (event.target.value.length <= maxTitleLength) {
      setTitle(event.target.value);
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
      <div>
        {title.length}/{maxTitleLength}
      </div>
    </div>
  );
}

export default Title;
