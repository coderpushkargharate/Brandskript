import express from 'express';
import Booking from '../models/Booking.js';
import { sendConfirmationEmail, sendAdminNotificationEmail } from '../services/emailService.js';

const router = express.Router();

const validateBooking = (data) => {
  const errors = [];

  if (!data.fullName || data.fullName.trim() === '') {
    errors.push('Full name is required');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (!data.phoneNumber || data.phoneNumber.trim() === '') {
    errors.push('Phone number is required');
  }

  if (!data.occupation || data.occupation.trim() === '') {
    errors.push('Occupation is required');
  }

  if (!data.weight || data.weight <= 0) {
    errors.push('Valid weight is required');
  }

  if (!data.height || data.height <= 0) {
    errors.push('Valid height is required');
  }

  if (!data.age || data.age <= 0 || data.age > 150) {
    errors.push('Valid age is required');
  }

  if (!data.condition || data.condition.trim() === '') {
    errors.push('Condition is required');
  }

  if (!data.selectedDate || data.selectedDate.trim() === '') {
    errors.push('Selected date is required');
  }

  if (!data.timeSlot || data.timeSlot.trim() === '') {
    errors.push('Time slot is required');
  }

  return errors;
};

router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
  }
});

router.get('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ message: 'Failed to fetch booking', error: error.message });
  }
});

router.post('/bookings', async (req, res) => {
  try {
    const validationErrors = validateBooking(req.body);

    if (validationErrors.length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    const booking = new Booking(req.body);
    const newBooking = await booking.save();

    const emailSent = await sendConfirmationEmail(newBooking);
    const adminNotified = await sendAdminNotificationEmail(newBooking);

    res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking,
      emailSent: emailSent,
      adminNotified: adminNotified
    });
  } catch (error) {
    console.error('Error creating booking:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: 'Validation error', errors: messages });
    }

    res.status(400).json({ message: 'Failed to create booking', error: error.message });
  }
});

router.put('/bookings/:id', async (req, res) => {
  try {
    const validationErrors = validateBooking(req.body);

    if (validationErrors.length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: 'Validation error', errors: messages });
    }

    res.status(400).json({ message: 'Failed to update booking', error: error.message });
  }
});

router.delete('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Failed to delete booking', error: error.message });
  }
});

export default router;
