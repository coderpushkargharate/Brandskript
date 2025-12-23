import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  startTimeline: {
    type: String,
    required: true
  },
  monthlyRevenue: {
    type: String,
    required: true
  },
  selectedDate: {
    type: String,
    required: true,
    trim: true
  },
  timeSlot: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;