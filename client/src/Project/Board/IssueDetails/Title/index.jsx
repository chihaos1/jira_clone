import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 500;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const Counter = styled.div`
  font-size: 12px;
  color: ${props => (props.isOverLimit ? 'red' : '#666')};
  text-align: right;
  margin-bottom: 8px;
`;

const Title = ({ title, onChange }) => {
  const [titleValue, setTitleValue] = useState(title);

  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_TITLE_LENGTH) {
      setTitleValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div>
      <TitleInput
        type="text"
        value={titleValue}
        onChange={handleTitleChange}
        placeholder="Enter issue title"
      />
      <Counter isOverLimit={titleValue.length > MAX_TITLE_LENGTH}>
        {titleValue.length}/{MAX_TITLE_LENGTH}
      </Counter>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
