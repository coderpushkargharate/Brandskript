import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  selectedDate: {
    type: String,
    required: true
  },
  timeSlot: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
