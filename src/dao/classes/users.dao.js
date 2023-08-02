import { UserModel } from "../models/users.model.js";

export default class UsersDao {
  getAll = async () => {
    const users = await UserModel.find();
    return users;
  };

  getByID = async (id) => {
    const user = await UserModel.findOne({ _id: id });
    return user;
  };

  create = async (user) => {
    const result = await UserModel.create(user);
    return result;
  };

  updateOne = async (id, user) => {
    const result = await UserModel.updateOne({ _id: id }, { $set: user });
    return result;
  };
}
