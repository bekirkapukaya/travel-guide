import { Router } from 'express';
import postRouter from './postRoutes';

const rootRouter = Router();

rootRouter.use('/', (req, res) => {
  res.status(200).json({
    status: 'Active',
    message: 'API service is running...',
  });
});
rootRouter.use('/posts', postRouter);

export default rootRouter;
