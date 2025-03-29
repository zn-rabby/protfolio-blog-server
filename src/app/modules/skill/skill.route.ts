import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { SkillValidationSchema } from './skill.validation';
import { SkillControllers } from './skill.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const skillRouters = Router();

skillRouters.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillControllers.createSkillController,
);

skillRouters.get('/', SkillControllers.getAllSkillsController);

skillRouters.get('/:id', SkillControllers.getSkillController);

skillRouters.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(SkillValidationSchema.updateSkillValidationSchema),
  SkillControllers.updateSkillController,
);

skillRouters.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  SkillControllers.deleteSkillController,
);

export default skillRouters;

// /dashboard/:path*
