import { Schema, model, models } from "mongoose";

const finDataIncomeSchema = new Schema({
  person: {
    type: Object,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  incomeName: String,
  amount: Number,
  recurring: Boolean,
  period: Number,
  recurringStart: Date,
  recurringEnd: Date,
  received: Boolean,
  updated_at: Date,
});

const finDataIncome =
  models?.finDataIncomeSchema ||
  model("finDataIncomeSchema", finDataIncomeSchema, "Nutrixa_Users");

export default finDataIncome;
