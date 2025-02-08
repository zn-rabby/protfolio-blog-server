
import { IProject } from './project.interface';
import Project from './project.model';

const createProject = async (payload: IProject) => {
//   const user = await User.isUserExists(userEmail);

//   if (!user) {
//     throw new AppError(404, 'User not found!');
//   }

//   const userId = user?._id;

  const projectData = { ...payload};

  const result = await Project.create(projectData);
  return result;
};

export const projectService = {
  createProject,
};
