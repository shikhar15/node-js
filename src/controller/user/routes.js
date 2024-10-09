import * as express from 'express';
import { me, createUser } from './Controller.js'
import { authMiddilware } from '../../lib/middleware.js'


const UserRouter =  express.Router();

// UserRouter.route('/')
//      .get(authMiddilware('getUsers', 'read'), validationHandler(validation.get), UserController.get)
     // .post(authMiddilware('getUsers', 'read'), validationHandler(validation.create), UserController.post)
     // .put(authMiddilware('getUsers', 'read'), validationHandler(validation.update), UserController.update)
     // .delete(authMiddilware('getUsers', 'read'), validationHandler(validation.delete), UserController.delete);

// UserRouter.route('/:id')
//      .delete(authMiddilware('getUsers', 'read'), validationHandler(validation.delete), UserController.delete);

// UserRouter.route('/login')
//      .post(validationHandler(validation.login), UserController.login);

UserRouter.route('/get').get(authMiddilware, me);
UserRouter.route('/create').post(authMiddilware, createUser);

export default UserRouter;