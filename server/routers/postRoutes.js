import { Router } from 'express';

const postRouter = Router();

postRouter.get('/');
postRouter.post('/');
postRouter.delete('/:id');
postRouter.patch('/:id');

export default postRouter;
