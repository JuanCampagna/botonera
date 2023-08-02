import { ButtonsModel } from '../models/buttons.model.js';

export default class ButtonsDao {
  getAll = async () => {
    const buttons = await ButtonsModel.find();
    return buttons;
  };

  getByID = async (id) => {
    const button = await ButtonsModel.findOne({ _id: id });
    return button;
  };

  create = async (button) => {
    const result = await ButtonsModel.create(button);
    return result;
  };

  updateOne = async (id, button) => {
    const result = await ButtonsModel.updateOne({ _id: id }, { $set: button });
    return result;
  };

  async findOneAndUpdate(_id) {
    const button = await ButtonsModel.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        $inc: { 'Buttons.$.amount': 1 },
      }
    );
    return button;
  }
}
