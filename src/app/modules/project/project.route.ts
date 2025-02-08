import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ProjectValidation } from './project.validations';
import { projectController } from './project.controller';

const projectRouters = Router();

projectRouters.post(
  '/',
  validateRequest(ProjectValidation.createProjectValidationSchema),
  projectController.createProject,
);

projectRouters.get('/', projectController.getAllProjects);

projectRouters.get('/:id', projectController.getSingleProject);

// blogRouters.patch('/:id', auth(USER_ROLE.user), blogController.updateBlog);

// blogRouters.delete(
//   '/:id',
//   auth(USER_ROLE.admin, USER_ROLE.user),
//   blogController.deleteBlog,
// );

export default projectRouters;

// /dashboard/:path*
