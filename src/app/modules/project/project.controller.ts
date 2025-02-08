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

export const projectController = {
  createProject,
};
