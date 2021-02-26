import { Router } from 'express';
import { createLocation } from '../controllers/locationController';

const locationRouter = Router();

locationRouter.get('/');
locationRouter.post('/', createLocation);
locationRouter.delete('/:id');
locationRouter.patch('/:id');

export default locationRouter;
