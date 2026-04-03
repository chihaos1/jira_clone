import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { IssueType } from 'shared/constants/issues';
import { IssueStatusCopy } from 'shared/constants/issues';
import { connect } from 'react-redux';
import { deleteIssue } from 'redux/actions/project';

import toast from 'shared/utils/toast';
import { ConfirmModal } from 'shared/components';

import { SectionTitle } from '../Styles';
import { DeleteButton } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
  deleteIssue: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

const IssueDetailsDelete = ({ issue, deleteIssue, modalClose }) => {
  const handleIssueDelete = async () => {
    await deleteIssue(issue.id);
    modalClose();
    toast.success('Issue has been successfully deleted.');
  };

  return (
    <ConfirmModal
      title="Are you sure you want to delete this issue?"
      description="Once you delete, it will be gone for good."
      render={({ open, close }) => (
        <Fragment>
          <SectionTitle>Delete issue</SectionTitle>
          <DeleteButton onClick={open}>Delete</DeleteButton>
          {open && (
            <ConfirmModal.Dialog
              onConfirm={() => {
                handleIssueDelete();
                close();
              }}
              onCancel={close}
            />
          )}
        </Fragment>
      )}
    />
  );
};

IssueDetailsDelete.propTypes = propTypes;

export default connect(null, { deleteIssue })(IssueDetailsDelete);
