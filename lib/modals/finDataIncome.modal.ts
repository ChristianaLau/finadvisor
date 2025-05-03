import { Schema, model, models } from "mongoose";

const finDataIncomeSchema = new Schema({
  user: {
    required: [true, 'Please add a user'],
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  incomeName: String,
  amount: Number,
  recurring: Boolean,
  period: Number,
  recurringStart: Date,
  recurringEnd: Date,
  received: Boolean,
  updated_at: Date,
},{timestamps: true});


const finDataIncome =
  models?.Income ||
  model("Income", finDataIncomeSchema);

export default finDataIncome;
