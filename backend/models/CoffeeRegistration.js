import mongoose from "mongoose";

const coffeeRegistrationSchema = new mongoose.Schema(
  {
    firstName: String,
    email: String,
    phone: String,
    userType: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "CoffeeRegistration",
  coffeeRegistrationSchema
);
