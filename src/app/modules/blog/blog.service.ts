import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import { blogSearchableFields } from './blog.constant';
import { IBlog } from './blog.interface';
import Blog from './blog.model';

const createBlog = async (payload: IBlog) => {
  // const user = await User.isUserExists(userEmail);

  // if (!user) {
  //   throw new AppError(404, 'User not found!');
  // }

  // const userId = user?._id;

  const blogData = { ...payload };

  const result = await Blog.create(blogData);
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(blogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await blogQuery.countTotal();
  const result = await blogQuery.modelQuery;

  // check no blogs found
  if (!result.length) {
    throw new AppError(404, 'No blogs found!');
  }

  return {
    meta,
    result,
  };
};

const getSingleBlog = async (id: string) => {
  const user = await Blog.findById(id);

  return user;
};

const updateBlog = async (
  id: string,
  userEmail: string,
  payload: Partial<IBlog>,
) => {
  // check user is exists
  const user = await User.isUserExists(userEmail);

  if (!user) {
    throw new AppError(403, 'User not found! You cannot update the blog.');
  }

  // check blog is exists
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found! You cannot update it.');
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteBlog = async (id: string, userEmail: string) => {
  // check user is exists
  const user = await User.isUserExists(userEmail);

  if (!user) {
    throw new AppError(403, 'User not found! You cannot delete the blog.');
  }

  // check blog is exists
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found!');
  }

  const result = await Blog.findByIdAndDelete(id, { isDeleted: true });

  return result;
};

export const blogService = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
};
