import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IssueTitle, CharacterCounter } from './Styles';

const ProjectBoardIssueDetailsTitle = ({ issue, updateIssue }) => {
  const MAX_TITLE_LENGTH = 200;
  const [title, setTitle] = useState(issue.title);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= MAX_TITLE_LENGTH) {
      setTitle(newTitle);
      updateIssue({ title: newTitle });
    }
  };

  return (
    <>
      <IssueTitle
        value={title}
        placeholder="Short summary"
        onChange={handleTitleChange}
        maxLength={MAX_TITLE_LENGTH}
      />
      <CharacterCounter isLimitExceeded={title.length > MAX_TITLE_LENGTH}>
        {title.length}/{MAX_TITLE_LENGTH}
      </CharacterCounter>
    </>
  );
};

ProjectBoardIssueDetailsTitle.propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

export default ProjectBoardIssueDetailsTitle;
