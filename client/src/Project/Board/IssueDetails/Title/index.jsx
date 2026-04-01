import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const Title = ({ title, onChange }) => (
  <Input
    value={title}
    onChange={onChange}
    placeholder="Enter issue title..."
  />
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
