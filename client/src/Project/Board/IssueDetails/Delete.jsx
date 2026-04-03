import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { Button, ConfirmModal } from 'shared/components';

import { Actions } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsDelete = ({ issue, fetchProject, modalClose }) => {
  const [isDeleting, setDeleting] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setConfirmModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setDeleting(true);
      await api.delete(`/issues/${issue.id}`);
      await fetchProject();
      modalClose();
      toast.success('Issue has been deleted successfully.');
    } catch (error) {
      toast.error(error);
    } finally {
      setDeleting(false);
      setConfirmModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setConfirmModalOpen(false);
  };

  return (
    <>
      <Actions>
        <Button
          icon="trash"
          iconSize={19}
          variant="empty"
          onClick={handleDeleteClick}
          isWorking={isDeleting}
        >
          Delete issue
        </Button>
      </Actions>
      
      {isConfirmModalOpen && (
        <ConfirmModal
          title="Delete issue"
          message={`Are you sure you want to delete this issue? This action cannot be undone.`}
          confirmText="Delete issue"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          isWorking={isDeleting}
        />
      )}
    </>
  );
};

ProjectBoardIssueDetailsDelete.propTypes = propTypes;

export default ProjectBoardIssueDetailsDelete;
