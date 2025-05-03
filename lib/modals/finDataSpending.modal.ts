import { Schema, model, models } from "mongoose";

const spendingSchema = new Schema(
  {
    user: {
      required: [true, "Please add a user"],
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    spendingName: String,
    amount: Number,
    recurring: Boolean,
    period: Number,
    spendingType: String,
    wantLevel: Number,
    recurringStart: Date,
    recurringEnd: Date,
  },
  { timestamps: true }
);

const finDataSpending =
  models?.Spending || model("Spending", spendingSchema);
// const modelname = "FinData";
// let finDataSpending;
// if (mongoose.models.FinData) {
//   finDataSpending = model("FinData");
// } else {
//   finDataSpending = model("FinData", spendingSchema);
// }
export default finDataSpending;
