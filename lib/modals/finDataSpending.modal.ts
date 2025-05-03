import { Schema, model, models } from "mongoose";

const spendingSchema = new Schema({
  person: {
    type: Object,
    required: false,
  },

  spendingName: String,
  amount: Number,
  recurring: Boolean,
  period: Number,
  spendingType: String,
  wantLevel: Number,
  recurringStart: Date,
  recurringEnd: Date,
  updated_at: Date,
});

const finDataSpending =
  models?.spendingSchema ||
  model("spendingSchema", spendingSchema, "Nutrixa_Users");

export default finDataSpending;
