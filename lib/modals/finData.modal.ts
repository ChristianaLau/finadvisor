import { Schema, model, models } from "mongoose";

const finDataSchema = new Schema({
  user: {
    required: [true, 'Please add a user'],
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  rent: {
    type: Number,
    required: false,
  },
  goalAmount:Number,

},{timestamps: true});

// console.log(models)
const finData =
  models?.FinData ||
  model("FinData", finDataSchema);

export default finData;
