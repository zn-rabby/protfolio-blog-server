import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectService } from './project.service';
const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProject(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await projectService.getAllProject(query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project fetched successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const user = await projectService.getSingleProject(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project Retrieved Successfully',
    data: user,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const userEmail = req?.user?.email;

  const result = await projectService.updateProject(id, userEmail, updatedData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const id = req.params.id;
  const userEmail = req?.user?.email;
  await projectService.deleteProject(id, userEmail);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project deleted successfully',
    data: {},
  });
});

export const projectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
