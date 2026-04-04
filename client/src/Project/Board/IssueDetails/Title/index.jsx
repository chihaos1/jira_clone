import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { KeyCodes } from 'shared/constants/keyCodes';
import { is } from 'shared/utils/validation';
import { TextEditedContent, TextEditor, Actions, CharacterCounter } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsTitle = ({ issue, updateIssue }) => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(issue.title);

  const handleTitleChange = value => {
    // Limit to 100 characters
    if (value.length <= 100) {
      setTitle(value);
    }
  };

  const handleTitleSubmit = () => {
    if (title.trim() !== issue.title) {
      updateIssue({ title: title.trim() });
    }
    setEditing(false);
  };

  const handleTitleCancel = () => {
    setTitle(issue.title);
    setEditing(false);
  };

  const handleKeyDown = event => {
    if (event.keyCode === KeyCodes.ENTER) {
      event.preventDefault();
      handleTitleSubmit();
    }
    if (event.keyCode === KeyCodes.ESCAPE) {
      handleTitleCancel();
    }
  };

  return (
    <Fragment>
      {isEditing ? (
        <Fragment>
          <TextEditor
            placeholder="Short summary"
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleTitleSubmit}
          />
          <CharacterCounter isNearLimit={title.length > 80}>
            {title.length}/100
          </CharacterCounter>
          <Actions>
            <button type="button" onClick={handleTitleSubmit}>
              Save
            </button>
            <button type="button" onClick={handleTitleCancel}>
              Cancel
            </button>
          </Actions>
        </Fragment>
      ) : (
        <TextEditedContent onClick={() => setEditing(true)}>
          {issue.title}
        </TextEditedContent>
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsTitle.propTypes = propTypes;

export default ProjectBoardIssueDetailsTitle;