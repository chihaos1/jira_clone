import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IssueTitle } from './Styles';

const Title = ({ issue, updateIssue }) => {
  const [title, setTitle] = useState(issue.title);
  const characterLimit = 100;

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= characterLimit) {
      setTitle(newTitle);
    }
  };

  const handleTitleBlur = () => {
    if (title !== issue.title) {
      updateIssue({ title });
    }
  };

  return (
    <>
      <IssueTitle
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.target.blur();
          }
        }}
        maxLength={characterLimit}
      />
      <div style={{ fontSize: '12px', color: '#5e6c84', marginTop: '5px' }}>
        {title.length}/{characterLimit} characters
      </div>
    </>
  );
};

Title.propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

export default Title;
