import { Schema, model, models } from "mongoose";

// Define the schema for user spending data
const spendingSchema = new Schema(
  {
    user: {
      required: [true, "Please add a user"],
      type: Schema.Types.ObjectId,
      ref: "User", // reference to User model
    },
    spendingName: {
      type: String,
      required: [true, "Please add a spending name"],
    },
    amount: {
      type: Number,
      required: [true, "Please add an amount"],
    },
    recurring: {
      type: Boolean,
      default: false,
    },
    period: {
      type: Number, // e.g., every 7 days, every 30 days
    },
    spendingType: {
      type: String, // e.g., "Groceries", "Rent"
    },
    wantLevel: {
      type: Number, // e.g., 1 = need, 5 = want
    },
    recurringStart: {
      type: Date,
    },
    recurringEnd: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Create or retrieve the model
const finDataSpending =
  models?.Spending || model("Spending", spendingSchema);

export default finDataSpending;
