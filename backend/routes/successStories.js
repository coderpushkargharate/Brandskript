import express from 'express';
import SuccessStory from '../models/SuccessStory.js';

const router = express.Router();

// CREATE
router.post('/success-stories', async (req, res) => {
  try {
    const data = await SuccessStory.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL
router.get('/success-stories', async (req, res) => {
  const data = await SuccessStory.find().sort({ createdAt: -1 }).limit(20);
  res.json(data);
});

// READ ONE
router.get('/success-stories/:id', async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.json(story);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching story', error: error.message });
  }
});

// UPDATE
router.put('/success-stories/:id', async (req, res) => {
  try {
    const story = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    
    res.json({ message: 'Story updated successfully', story });
  } catch (error) {
    res.status(500).json({ message: 'Error updating story', error: error.message });
  }
});

// DELETE
router.delete('/success-stories/:id', async (req, res) => {
  try {
    await SuccessStory.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting story', error: error.message });
  }
});

// TOGGLE PUBLISH
router.patch('/success-stories/:id/publish', async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    
    story.published = !story.published;
    await story.save();
    
    res.json({ message: 'Publish status updated', story });
  } catch (error) {
    res.status(500).json({ message: 'Error toggling publish status', error: error.message });
  }
});

export default router;