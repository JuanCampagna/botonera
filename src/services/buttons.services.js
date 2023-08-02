import ButtonsDao from '../dao/classes/buttons.dao.js';

const Buttons = new ButtonsDao();

export class ButtonsService {
  async getAllButons() {
    try {
      const buttons = await Buttons.getAll();
      return buttons;
    } catch (error) {
      throw error;
    }
  }
}
