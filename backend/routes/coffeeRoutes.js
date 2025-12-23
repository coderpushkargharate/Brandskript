import express from 'express';
import CoffeeRegistration from '../models/CoffeeRegistration.js';

const router = express.Router();

// CREATE
router.post('/coffee-registrations', async (req, res) => {
  try {
    const data = await CoffeeRegistration.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL
router.get('/coffee-registrations', async (req, res) => {
  const data = await CoffeeRegistration.find().sort({ createdAt: -1 });
  res.json(data);
});

// DELETE
router.delete('/coffee-registrations/:id', async (req, res) => {
  await CoffeeRegistration.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
