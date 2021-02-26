import { Router } from 'express';
import locationRouters from './locationRouters';

const rootRouter = Router();

rootRouter.use('/locations', locationRouters);
rootRouter.use('/', (req, res) => {
  res.status(200).json({
    status: 'Active',
    message: 'API service is running...',
  });
});

export default rootRouter;
