import mongoose from 'mongoose';

const coffeeRegistrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('CoffeeRegistration', coffeeRegistrationSchema);