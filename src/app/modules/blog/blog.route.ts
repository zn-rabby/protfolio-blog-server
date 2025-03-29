import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { BlogValidation } from './blog.validation';
import { blogController } from './blog.controller';

const blogRouters = Router();

blogRouters.post(
  '/',
  validateRequest(BlogValidation.createBlogValidationSchema),
  blogController.createBlog,
);

blogRouters.get('/', blogController.getAllBlogs);

blogRouters.get('/:id', blogController.getSingleBlog);

blogRouters.patch(
  '/:id',
  validateRequest(BlogValidation.updateBlogValidationSchema),
  blogController.updateBlog,
);

blogRouters.delete(
  '/:id',

  blogController.deleteBlog,
);

export default blogRouters;
