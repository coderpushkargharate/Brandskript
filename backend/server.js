import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

dotenv.config();

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure uploads directory exists
const uploadDir = join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadDir));

// ===== DATABASE MODELS =====

// Blog Model
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['GUIDES', 'UPDATES', 'CASE STUDIES', 'RESOURCES']
  },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  image: { type: String, required: true }
}, { timestamps: true });
const Blog = mongoose.model('Blog', blogSchema);

// Booking Model
const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  startTimeline: { type: String, required: true },
  monthlyRevenue: { type: String, required: true },
  selectedDate: { type: String, required: true, trim: true },
  timeSlot: { type: String, required: true, trim: true },
  businessName: { type: String, required: true, trim: true },
  productsServices: { type: String, required: true, trim: true },
  targetAudience: { type: String, required: true, trim: true },
  leadGenerationMethod: { type: String, required: true, trim: true },
  mainChallenges: { type: String, required: true, trim: true }
}, { timestamps: true });
const Booking = mongoose.model('Booking', bookingSchema);

// Coffee Registration Model
const coffeeRegistrationSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phone: String,
  userType: String
}, { timestamps: true });
const CoffeeRegistration = mongoose.model('CoffeeRegistration', coffeeRegistrationSchema);

// ✅ ENHANCED NEWSPAPER MODEL
const newspaperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mediaUrl: { type: String, required: true },     // filename (e.g., "media-12345.jpg")
  mediaType: {                                    // 'image' or 'video'
    type: String,
    enum: ['image', 'video'],
    required: true
  },
  logoUrl: { type: String },                      // optional logo filename
  authorName: { type: String, required: true },
  authorTitle: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });
const Newspaper = mongoose.model('Newspaper', newspaperSchema);

// ===== EMAIL SERVICE =====

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const getConfirmationEmailTemplate = (booking) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #16a34a, #15803d); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          .section { margin: 20px 0; }
          .section-title { font-size: 16px; font-weight: bold; color: #16a34a; margin-bottom: 10px; }
          .info-row { display: flex; justify-content: space-between; padding: 10px; background-color: white; margin: 5px 0; border-radius: 4px; }
          .label { font-weight: bold; color: #666; }
          .value { color: #333; }
          .divider { border-top: 2px solid #16a34a; margin: 20px 0; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
          .button { display: inline-block; padding: 12px 30px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0; }
          .success-badge { display: inline-block; background-color: #dcfce7; color: #166534; padding: 8px 16px; border-radius: 4px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Consultation Scheduled!</h1>
            <p>Your 1-on-1 session with Brandskript has been confirmed</p>
          </div>
          <div class="content">
            <p>Hello <strong>${booking.fullName}</strong>,</p>
            <p>Thank you for booking a free 1-on-1 consultation call with Brandskript!</p>
            <div class="section">
              <div style="text-align: center; margin: 20px 0;">
                <span class="success-badge">✓ Confirmed</span>
              </div>
            </div>
            <div class="section">
              <div class="section-title">Session Details</div>
              <div class="info-row"><span class="label">Date:</span><span class="value">${booking.selectedDate}</span></div>
              <div class="info-row"><span class="label">Time:</span><span class="value">${booking.timeSlot}</span></div>
              <div class="info-row"><span class="label">Duration:</span><span class="value">30 minutes</span></div>
            </div>
            <div class="divider"></div>
            <div class="section">
              <div class="section-title">Business Information</div>
              <div class="info-row"><span class="label">Monthly Revenue:</span><span class="value">${booking.monthlyRevenue}</span></div>
              <div class="info-row"><span class="label">Start Timeline:</span><span class="value">${booking.startTimeline}</span></div>
              <div class="info-row"><span class="label">Business Name:</span><span class="value">${booking.businessName}</span></div>
            </div>
            <div class="divider"></div>
            <div class="section">
              <div class="section-title">Your Contact</div>
              <div class="info-row"><span class="label">Name:</span><span class="value">${booking.fullName}</span></div>
              <div class="info-row"><span class="label">Email:</span><span class="value">${booking.email}</span></div>
            </div>
            <div class="divider"></div>
            <div class="section">
              <p><strong>What's Next?</strong></p>
              <p>We'll send a meeting link 15 minutes before your call.</p>
            </div>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.APP_URL || 'https://brandskript.com'}" class="button">Visit Brandskript</a>
            </div>
            <div class="footer">
              <p>© 2025 Brandskript. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

const sendConfirmationEmail = async (booking) => {
  try {
    const mailOptions = {
      from: `Brandskript <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: booking.email,
      subject: `Your Brandskript Consultation is Confirmed!`,
      html: getConfirmationEmailTemplate(booking),
      replyTo: process.env.FROM_EMAIL || process.env.SMTP_USER
    };
    await transporter.sendMail(mailOptions);
    console.log('✅ Client confirmation email sent');
    return true;
  } catch (error) {
    console.error('❌ Failed to send client email:', error.message);
    return false;
  }
};

const sendAdminNotificationEmail = async (booking) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
    const mailOptions = {
      from: `Brandskript <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Consultation Booking - ${booking.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Booking: ${booking.fullName}</h2>
          <p><strong>Email:</strong> ${booking.email}</p>
          <p><strong>Business:</strong> ${booking.businessName}</p>
          <p><strong>Date:</strong> ${booking.selectedDate} at ${booking.timeSlot}</p>
          <p><strong>Revenue:</strong> ${booking.monthlyRevenue}</p>
          <p><strong>Challenges:</strong> ${booking.mainChallenges}</p>
        </div>
      `,
      replyTo: booking.email
    };
    await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification email sent');
    return true;
  } catch (error) {
    console.error('❌ Failed to send admin email:', error.message);
    return false;
  }
};

const verifyEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified');
  } catch (error) {
    console.error('❌ SMTP verification failed:', error.message);
  }
};

// ===== VALIDATION =====

const validateBooking = (data) => {
  const errors = [];
  const requiredFields = [
    'fullName', 'email', 'startTimeline', 'monthlyRevenue',
    'selectedDate', 'timeSlot', 'businessName', 'productsServices',
    'targetAudience', 'leadGenerationMethod', 'mainChallenges'
  ];

  requiredFields.forEach(field => {
    if (!data[field] || String(data[field]).trim() === '') {
      errors.push(`${field} is required`);
    }
  });

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }

  return errors;
};

// ===== FILE STORAGE =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `media-${Date.now()}.${ext}`);
  }
});

const uploadFields = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed!'), false);
    }
  }
}).fields([
  { name: 'media', maxCount: 1 },
  { name: 'logo', maxCount: 1 }
]);

// ===== MIDDLEWARE =====

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// ===== ROUTES =====

// Blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== 'ALL POSTS' ? { category } : {};
    const blogs = await Blog.find(filter).sort({ date: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const errors = validateBooking(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const booking = new Booking(req.body);
    const newBooking = await booking.save();

    await sendConfirmationEmail(newBooking);
    await sendAdminNotificationEmail(newBooking);

    res.status(201).json({ message: 'Booking created', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

app.delete('/api/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking' });
  }
});

// Coffee Registrations
app.post('/api/coffee-register', async (req, res) => {
  try {
    const data = await CoffeeRegistration.create(req.body);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register coffee break' });
  }
});

app.get('/api/coffee-registrations', async (req, res) => {
  try {
    const data = await CoffeeRegistration.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch coffee registrations' });
  }
});

app.delete('/api/coffee-registrations/:id', async (req, res) => {
  try {
    const item = await CoffeeRegistration.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Registration not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete registration' });
  }
});

// ✅ ENHANCED NEWSPAPER ROUTES

// GET all newspapers (with full URLs)
app.get('/api/newspapers', async (req, res) => {
  try {
    const newspapers = await Newspaper.find().sort({ date: -1 });
    const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;
    const formatted = newspapers.map(n => ({
      ...n.toObject(),
      mediaUrl: baseUrl + n.mediaUrl,
      logoUrl: n.logoUrl ? baseUrl + n.logoUrl : null
    }));
    res.json(formatted);
  } catch (error) {
    console.error('Error fetching newspapers:', error);
    res.status(500).json({ message: 'Failed to fetch newspapers' });
  }
});

// POST new newspaper
app.post('/api/newspapers', uploadFields, async (req, res) => {
  try {
    const { title, description, authorName, authorTitle } = req.body;

    if (!title || !description || !authorName || !authorTitle) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!req.files?.media) {
      return res.status(400).json({ message: 'Media file is required' });
    }

    const mediaFile = req.files.media[0];
    const logoFile = req.files.logo?.[0];

    const mediaType = mediaFile.mimetype.startsWith('video/') ? 'video' : 'image';

    const newspaper = new Newspaper({
      title,
      description,
      mediaUrl: mediaFile.filename,
      mediaType,
      logoUrl: logoFile ? logoFile.filename : undefined,
      authorName,
      authorTitle,
      date: new Date()
    });

    const saved = await newspaper.save();
    const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;
    const result = {
      ...saved.toObject(),
      mediaUrl: baseUrl + saved.mediaUrl,
      logoUrl: saved.logoUrl ? baseUrl + saved.logoUrl : null
    };

    res.status(201).json({ success: true, newspaper: result });
  } catch (error) {
    console.error('Newspaper upload error:', error);
    res.status(500).json({ message: 'Failed to create newspaper entry' });
  }
});

// PUT (Update) newspaper
app.put('/api/newspapers/:id', uploadFields, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, authorName, authorTitle, removeLogo } = req.body;

    if (!title || !description || !authorName || !authorTitle) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const updateData = {
      title,
      description,
      authorName,
      authorTitle
    };

    if (req.files?.media) {
      const mediaFile = req.files.media[0];
      updateData.mediaUrl = mediaFile.filename;
      updateData.mediaType = mediaFile.mimetype.startsWith('video/') ? 'video' : 'image';
    }

    if (req.files?.logo) {
      updateData.logoUrl = req.files.logo[0].filename;
    } else if (removeLogo === 'true') {
      updateData.logoUrl = null;
    }

    const updated = await Newspaper.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Newspaper not found' });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;
    const result = {
      ...updated.toObject(),
      mediaUrl: baseUrl + updated.mediaUrl,
      logoUrl: updated.logoUrl ? baseUrl + updated.logoUrl : null
    };

    res.json(result);
  } catch (error) {
    console.error('Newspaper update error:', error);
    res.status(500).json({ message: 'Failed to update newspaper' });
  }
});

// DELETE newspaper
app.delete('/api/newspapers/:id', async (req, res) => {
  try {
    const newspaper = await Newspaper.findByIdAndDelete(req.params.id);
    if (!newspaper) {
      return res.status(404).json({ message: 'Newspaper not found' });
    }
    // Note: File deletion from disk is optional and not implemented here for simplicity
    res.json({ message: 'Newspaper deleted successfully' });
  } catch (error) {
    console.error('Newspaper delete error:', error);
    res.status(500).json({ message: 'Failed to delete newspaper' });
  }
});

// ===== HEALTH & CATCH-ALL =====

app.get('/', (req, res) => {
  res.json({
    message: 'Handoff API Server',
    version: '1.0.0',
    endpoints: {
      blogs: '/api/blogs',
      bookings: '/api/bookings',
      coffee: '/api/coffee-registrations',
      newspapers: '/api/newspapers'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// ===== START SERVER =====

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    verifyEmailConnection();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📡 API available at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });