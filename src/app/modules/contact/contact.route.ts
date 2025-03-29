import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ContactValidation } from './contact.validation';
import { contactController } from './contact.controller';

const contactRouters = Router();

contactRouters.post(
  '/',
  validateRequest(ContactValidation.createContactValidationSchema),
  contactController.createContact,
);

contactRouters.get('/', contactController.getAllContacts);

contactRouters.delete(
  '/:id',

  contactController.deleteContact,
);

export default contactRouters;
