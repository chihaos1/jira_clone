import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { KeyCodes } from 'shared/constants/keyCodes';
import { Form, Textarea } from 'shared/components';

import { Title, TitleTextarea, CharacterCounter } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsTitle = ({ issue, updateIssue }) => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(issue.title);

  const handleTitleChange = (value) => {
    if (value.length <= 100) {
      setTitle(value);
    }
  };

  const handleTitleSubmit = () => {
    setEditing(false);
    updateIssue({ title });
  };

  const handleTitleKeyDown = (event) => {
    if (event.keyCode === KeyCodes.ENTER) {
      event.preventDefault();
      handleTitleSubmit();
    }
  };

  const handleTitleCancel = () => {
    setEditing(false);
    setTitle(issue.title);
  };

  return (
    <Fragment>
      {isEditing ? (
        <Form.Field>
          <TitleTextarea
            autoFocus
            placeholder="Short summary"
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleTitleKeyDown}
            onBlur={handleTitleSubmit}
          />
          <CharacterCounter isNearLimit={title.length > 80}>
            {title.length}/100
          </CharacterCounter>
        </Form.Field>
      ) : (
        <Title onClick={() => setEditing(true)}>{issue.title}</Title>
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsTitle.propTypes = propTypes;

export default ProjectBoardIssueDetailsTitle;