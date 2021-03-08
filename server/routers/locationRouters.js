import { Router } from 'express';
import {
  createLocation,
  getLocations,
  deleteLocation,
  updateLocation,
  getSingleLocation,
} from '../controllers/locationController';

const locationRouter = Router();

locationRouter.get('/', getLocations);
locationRouter.post('/', createLocation);
locationRouter.delete('/:id', deleteLocation);
locationRouter.patch('/:id', updateLocation);
locationRouter.get('/:id', getSingleLocation);
export default locationRouter;
