import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { projectSearchableFields } from './project.constant';
import { IProject } from './project.interface';
import Project from './project.model';

const createProject = async (payload: IProject) => {
  //   const user = await User.isUserExists(userEmail);

  //   if (!user) {
  //     throw new AppError(404, 'User not found!');
  //   }

  //   const userId = user?._id;

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

export const projectService = {
  createProject,
  getAllProject,
  getSingleProject,
};
