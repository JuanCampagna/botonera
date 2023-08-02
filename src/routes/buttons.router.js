import express from 'express';
import { buttonsController } from '../controllers/buttons.controller.js';

export const buttonsRouter = express.Router();

buttonsRouter.get('/', buttonsController.getAllButtons);

// buttons.put('/product/:pid', isUserAjax, cartController.addProductToCart);

// buttons.get('/:cid', cartController.getById);

// buttons.delete('/:pid', isUser, cartController.deleteByProductId);
