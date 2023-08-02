import { ButtonsService } from '../services/buttons.services.js';

const Buttons = new ButtonsService();

class ButtonsController {
  async getAllButtons(req, res) {
    // const email = req.session.email;
    try {
      const buttons = await Buttons.getAllButons();
      return res.status(200).json({ status: 'success', msg: `Existos`, data: {} });
    } catch (error) {
      return res.status(404).json({ status: 'error', msg: `Ha ocurrido un error`, data: {} });
    }
  }
}

export const buttonsController = new ButtonsController();
