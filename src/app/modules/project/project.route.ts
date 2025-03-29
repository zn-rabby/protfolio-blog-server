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

projectRouters.patch(
  '/:id',
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  projectController.updateProject,
);

projectRouters.delete('/:id', projectController.deleteProject);

export default projectRouters;

// /dashboard/:path*
