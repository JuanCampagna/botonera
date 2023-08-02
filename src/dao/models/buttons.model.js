import mongoose, { Schema, model } from 'mongoose';

const ButtonsSchema = new Schema({
  description: {
    type: String,
    required: true,
    max: 300,
  },
  title: {
    type: String,
    required: true,
    max: 300,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  mentions: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    },
  ],
  title: {
    type: [String],
    max: 50,
  },
  color: {
    type: String,
    required: true,
    max: 7,
  },
});

export const ButtonsModel = model('Buttons', ButtonsSchema);
