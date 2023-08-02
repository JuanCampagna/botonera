import UsersDao from "../dao/classes/users.dao.js";
import { createHash } from "../utils.js";

const Users = new UsersDao();

export class UsersService {
  async getAllUsers() {
    try {
      const users = await Users.getAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async createUser(user){
    try {
      user.password = createHash(user.password);
      await Users.create(user);
      return user;
    } catch (error) {
      throw error
    }
  }
}
