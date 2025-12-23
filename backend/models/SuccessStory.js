import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    default: '/default-profile.jpg'
  },
  videoUrl: {
    type: String,
    default: ''
  },
  published: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

export default SuccessStory;