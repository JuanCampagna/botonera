import { Schema, model } from 'mongoose';

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 50,
  },
  name: {
    type: String,
    required: true,
    max: 50,
  },
});

export const UserModel = model('Users', UsersSchema);
