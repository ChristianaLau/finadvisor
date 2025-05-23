import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  person: {
    type: Object,
    required: false,
  },
  daysGoalmet: {
    type: Boolean,
    required: false,
  },
  
},{timestamps:true});

const User = models?.User || model("User", UserSchema);

export default User;
