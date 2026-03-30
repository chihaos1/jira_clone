import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { KeyCodes } from 'shared/constants/keyCodes';
import { CHARACTER_LIMITS, getCharacterCountInfo } from 'shared/utils/validation';

import { Title, TitleTextarea, CharacterCounter } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const IssueDetailsTitle = ({ issue, updateIssue }) => {
  const [title, setTitle] = useState(issue.title);
  const [isEditing, setIsEditing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const $textareaRef = useRef();

  const characterInfo = getCharacterCountInfo(title, CHARACTER_LIMITS.ISSUE_TITLE);

  useEffect(() => {
    if (isEditing) {
      const $textarea = $textareaRef.current;
      $textarea.focus();
      $textarea.select();
    }
  }, [isEditing]);

  const handleTitleChange = title => {
    // Don't allow changes that exceed the character limit
    if (title.length <= CHARACTER_LIMITS.ISSUE_TITLE) {
      setTitle(title);
    }
  };

  const handleTitleSubmit = () => {
    // Only submit if within character limit and not empty
    if (title.trim() && !characterInfo.isOverLimit) {
      setIsEditing(false);
      updateIssue({ title });
    }
  };

  const handleTitleCancel = () => {
    setTitle(issue.title);
    setIsEditing(false);
  };

  const handleKeyDown = event => {
    const { keyCode } = event;

    if (keyCode === KeyCodes.ENTER) {
      event.preventDefault();
      handleTitleSubmit();
    }
    if (keyCode === KeyCodes.ESCAPE) {
      handleTitleCancel();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    handleTitleSubmit();
  };

  const shouldShowCounter = isEditing || isFocused || characterInfo.isNearLimit || characterInfo.isOverLimit;

  return (
    <Title>
      <TitleTextarea
        minRows={1}
        placeholder="Short summary"
        value={title}
        onChange={handleTitleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          setIsEditing(true);
          handleFocus();
        }}
        onBlur={handleBlur}
        ref={$textareaRef}
        data-testid="issue-title"
        isOverLimit={characterInfo.isOverLimit}
      />
      {shouldShowCounter && (
        <CharacterCounter 
          isOverLimit={characterInfo.isOverLimit}
          isNearLimit={characterInfo.isNearLimit}
        >
          {characterInfo.currentLength}/{characterInfo.limit}
          {characterInfo.isOverLimit && (
            <span> - {Math.abs(characterInfo.remaining)} characters over limit</span>
          )}
        </CharacterCounter>
      )}
    </Title>
  );
};

IssueDetailsTitle.propTypes = propTypes;

export default IssueDetailsTitle;