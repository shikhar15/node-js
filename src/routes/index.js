import * as express from 'express';
import UserRouter from '../controller/user/routes.js';

const mainRouter = express.Router();

// mainRouter.use('/db', traineeRouter);
mainRouter.use('/user', UserRouter);

export default mainRouter;