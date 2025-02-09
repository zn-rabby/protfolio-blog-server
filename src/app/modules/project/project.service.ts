import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { projectSearchableFields } from './project.constant';
import { IProject } from './project.interface';
import Project from './project.model';

const createProject = async (payload: IProject) => {
  const projectData = { ...payload };

  const result = await Project.create(projectData);
  return result;
};

const getAllProject = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(projectSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await projectQuery.countTotal();
  const result = await projectQuery.modelQuery;

  // check no blogs found
  if (!result.length) {
    throw new AppError(404, 'No Project found!');
  }

  return {
    meta,
    result,
  };
};

const getSingleProject = async (id: string) => {
  const user = await Project.findById(id);

  return user;
};

const updateProject = async (id: string, payload: Partial<IProject>) => {
  // check blog is exists
  const blog = await Project.findById(id);

  if (!blog) {
    throw new AppError(404, 'Product not found! You cannot update it.');
  }

  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProject = async (id: string) => {
  // check blog is exists
  const blog = await Project.findById(id);

  if (!blog) {
    throw new AppError(404, 'Project not found!');
  }

  const result = await Project.findByIdAndDelete(id, { isDeleted: true });

  return result;
};

export const projectService = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
