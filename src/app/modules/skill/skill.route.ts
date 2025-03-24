import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { SkillValidationSchema } from './skill.validation';
import { SkillControllers } from './skill.controller';

const skillRouters = Router();

skillRouters.post(
  '/',
  auth(),
  validateRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillControllers.createSkillController,
);

skillRouters.get('/', SkillControllers.getAllSkillsController);

skillRouters.get('/:id', SkillControllers.getSkillController);

skillRouters.patch(
  '/:id',
  auth(),
  validateRequest(SkillValidationSchema.updateSkillValidationSchema),
  SkillControllers.updateSkillController,
);

skillRouters.delete('/:id', auth(), SkillControllers.deleteSkillController);

export default skillRouters;

// /dashboard/:path*
