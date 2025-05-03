import { Schema, model, models } from "mongoose";

const finDataSchema = new Schema({
  person: {
    type: Object,
    required: false,
  },
  rent: {
    type: Number,
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const finData =
  models?.finDataSchema ||
  model("finDataSchema", finDataSchema, "Nutrixa_Users");

export default finData;
