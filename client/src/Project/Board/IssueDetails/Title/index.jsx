import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, CharCounter } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const MAX_TITLE_LENGTH = 100;

const IssueDetailsTitle = ({ issue, updateIssue }) => {
  const [title, setTitle] = useState(issue.title);

  const handleTitleChange = event => {
    const newTitle = event.target.value;
    if (newTitle.length <= MAX_TITLE_LENGTH) {
      setTitle(newTitle);
    }
  };

  const handleTitleBlur = () => {
    if (title !== issue.title) {
      updateIssue({ title });
    }
  };

  const remaining = MAX_TITLE_LENGTH - title.length;
  const isNearLimit = remaining <= 20;
  const isAtLimit = remaining === 0;

  return (
    <>
      <Title
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        maxLength={MAX_TITLE_LENGTH}
      />
      <CharCounter isNearLimit={isNearLimit} isAtLimit={isAtLimit}>
        {remaining} / {MAX_TITLE_LENGTH} characters remaining
      </CharCounter>
    </>
  );
};

IssueDetailsTitle.propTypes = propTypes;

export default IssueDetailsTitle;
