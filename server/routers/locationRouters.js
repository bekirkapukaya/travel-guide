import { Router } from 'express';
import {
  createLocation,
  getLocations,
} from '../controllers/locationController';

const locationRouter = Router();

locationRouter.get('/', getLocations);
locationRouter.post('/', createLocation);
locationRouter.delete('/:id');
locationRouter.patch('/:id');

export default locationRouter;
