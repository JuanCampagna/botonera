import { UsersService } from "../services/users.services.js";

const Users = new UsersService();

class UsersController {
  async getAllUsers(req, res) {
    // const email = req.session.email;
    try {
      const users = await Users.getAllUsers();
      return res.status(200).json({ status: 'success', msg: `Exitoso`, data: users });
    } catch (error) {
      return res.status(404).json({ status: 'error', msg: `Ha ocurrido un error`, data: error });
    }
  }

  async createUser(req, res) {
    const user = req.body;
    try {
      const response = await Users.createUser(user);
      return res.status(200).json({ status: 'success', msg: `Existos`, data: response });
    } catch (error) {
      return res.status(404).json({ status: 'error', msg: `Ha ocurrido un error`, data: error });
    }
  }

  async updateUser(req, res) {
    const user = req.body;
    try {
      const response = await Users.createUser(user);
      return res.status(200).json({ status: 'success', msg: `Existos`, data: response });
    } catch (error) {
      return res.status(404).json({ status: 'error', msg: `Ha ocurrido un error`, data: error });
    }
  }
}

export const usersController = new UsersController();
