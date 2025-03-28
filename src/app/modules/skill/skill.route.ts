import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { SkillValidationSchema } from './skill.validation';
import { SkillControllers } from './skill.controller';

const skillRouters = Router();

skillRouters.post(
  '/',
  validateRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillControllers.createSkillController,
);

skillRouters.get('/', SkillControllers.getAllSkillsController);

skillRouters.get('/:id', SkillControllers.getSkillController);

skillRouters.patch(
  '/:id',
  validateRequest(SkillValidationSchema.updateSkillValidationSchema),
  SkillControllers.updateSkillController,
);

skillRouters.delete('/:id', SkillControllers.deleteSkillController);

export default skillRouters;

// /dashboard/:path*
