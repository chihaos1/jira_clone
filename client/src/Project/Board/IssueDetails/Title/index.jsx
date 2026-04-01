import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { KeyCodes } from 'shared/constants/keyCodes';
import { Form, Field } from 'shared/components';

import { Title, TitleTextarea } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsTitle = ({ issue, updateIssue }) => {
  const handleTitleChange = title => {
    updateIssue({ title });
  };

  return (
    <Fragment>
      <Title>Title</Title>
      <Form
        enableReinitialize
        initialValues={{ title: issue.title }}
        onSubmit={values => handleTitleChange(values.title)}
      >
        <Field.TextArea
          name="title"
          placeholder="Enter issue title..."
          minRows={1}
          maxRows={2}
          onBlur={form => form.handleSubmit()}
          onKeyDown={(event, form) => {
            if (event.keyCode === KeyCodes.ENTER) {
              event.target.blur();
            }
          }}
          renderTextarea={({ ref, ...textareaProps }) => (
            <TitleTextarea {...textareaProps} ref={ref} spellCheck={false} />
          )}
        />
      </Form>
    </Fragment>
  );
};

ProjectBoardIssueDetailsTitle.propTypes = propTypes;

export default ProjectBoardIssueDetailsTitle;
