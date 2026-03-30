import Joi from 'joi';

export const createIssueSchema = Joi.object({
  title: Joi.string().min(1).max(200).required().label('Title'),
  description: Joi.string().allow('').max(5000).label('Description'),
  type: Joi.string().required().label('Type'),
  status: Joi.string().required().label('Status'),
  priority: Joi.number().required().label('Priority'),
  listPosition: Joi.number().required().label('List Position'),
  reporterId: Joi.string().required().label('Reporter'),
  projectId: Joi.string().required().label('Project'),
  userIds: Joi.array().items(Joi.string()).label('Users'),
});

export const updateIssueSchema = Joi.object({
  title: Joi.string().min(1).max(200).label('Title'),
  description: Joi.string().allow('').max(5000).label('Description'),
  type: Joi.string().label('Type'),
  status: Joi.string().label('Status'),
  priority: Joi.number().label('Priority'),
  listPosition: Joi.number().label('List Position'),
  reporterId: Joi.string().label('Reporter'),
  projectId: Joi.string().label('Project'),
  userIds: Joi.array().items(Joi.string()).label('Users'),
});

export const createCommentSchema = Joi.object({
  body: Joi.string().min(1).max(5000).required().label('Body'),
  issueId: Joi.string().required().label('Issue Id'),
  userId: Joi.string().required().label('User Id'),
});

export const updateCommentSchema = Joi.object({
  body: Joi.string().min(1).max(5000).label('Body'),
});

export const createProjectSchema = Joi.object({
  name: Joi.string().min(1).max(200).required().label('Name'),
  url: Joi.string().max(200).label('Url'),
  description: Joi.string().allow('').max(5000).label('Description'),
  category: Joi.string().min(1).max(200).required().label('Category'),
  leaderId: Joi.string().required().label('Lead'),
});

export const updateProjectSchema = Joi.object({
  name: Joi.string().min(1).max(200).label('Name'),
  url: Joi.string().max(200).label('Url'),
  description: Joi.string().allow('').max(5000).label('Description'),
  category: Joi.string().min(1).max(200).label('Category'),
  leaderId: Joi.string().label('Lead'),
});
