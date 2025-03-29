import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ProjectValidation } from './project.validations';
import { projectController } from './project.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const projectRouters = Router();

projectRouters.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(ProjectValidation.createProjectValidationSchema),
  projectController.createProject,
);

projectRouters.get('/', projectController.getAllProjects);

projectRouters.get('/:id', projectController.getSingleProject);

projectRouters.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  projectController.updateProject,
);

projectRouters.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  projectController.deleteProject,
);

export default projectRouters;

// /dashboard/:path*
