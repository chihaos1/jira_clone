import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Textarea, TitleContainer, CharacterCounter } from './Styles';

const MAX_TITLE_LENGTH = 100;

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

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

  return (
    <TitleContainer>
      <Textarea
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        maxLength={MAX_TITLE_LENGTH}
      />
      <CharacterCounter isNearLimit={isNearLimit}>
        {title.length}/{MAX_TITLE_LENGTH}
      </CharacterCounter>
    </TitleContainer>
  );
};

IssueDetailsTitle.propTypes = propTypes;

export default IssueDetailsTitle;
