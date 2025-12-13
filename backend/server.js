import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import { verifyConnection } from './services/emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    verifyConnection();
  })
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api', blogRoutes);
app.use('/api', bookingRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Handoff API Server',
    version: '1.0.0',
    endpoints: {
      blogs: '/api/blogs',
      bookings: '/api/bookings'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});
