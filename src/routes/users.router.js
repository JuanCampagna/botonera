import express from 'express';
import { usersController } from '../controllers/users.controllers.js';

export const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers);

usersRouter.post('/', usersController.createUser);

usersRouter.put('/product/:pid', usersController.updateUser);

// usersRouter.get('/:cid', cartController.getById);

// usersRouter.delete('/:pid', isUser, cartController.deleteByProductId);
