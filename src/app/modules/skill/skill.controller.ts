
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillServices } from './skill.service';

const createSkillController = catchAsync(async (req, res) => {
  const skillPayload = req.body;
  const createdSkill = await SkillServices.createSkill(skillPayload);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Skill is created successfully',
    data: createdSkill,
  });
});

const getAllSkillsController = catchAsync(async (req, res) => {
  const skills = await SkillServices.getAllSkills();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skills are retrieved successfully',
    data: skills,
  });
});

const getSkillController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const skill = await SkillServices.getSkillById(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill is retrieved successfully',
    data: skill,
  });
});

const updateSkillController = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedPayload = req.body;
  const updatedSkill = await SkillServices.updateSkillById(id, updatedPayload);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill is updated successfully',
    data: updatedSkill,
  });
});

const deleteSkillController = catchAsync(async (req, res) => {
  const id = req.params.id;
  await SkillServices.deleteSkillById(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill is deleted successfully',
    data: {},
  });
});

export const SkillControllers = {
  createSkillController,
  getAllSkillsController,
  getSkillController,
  updateSkillController,
  deleteSkillController,
};