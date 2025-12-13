# Code Examples & Quick Reference

## Email Service Usage

### Send Confirmation Email

```typescript
// In backend/routes/bookingRoutes.js
import { sendConfirmationEmail } from '../services/emailService.js';

const booking = await Booking.findById(id);
const emailSent = await sendConfirmationEmail(booking);

console.log('Email sent:', emailSent); // true or false
```

### Email Response

```javascript
const mailOptions = {
  from: `${process.env.APP_NAME} <${process.env.FROM_EMAIL}>`,
  to: booking.email,
  subject: `Session Booking Confirmation - ${process.env.APP_NAME}`,
  html: getConfirmationEmailTemplate(booking),
  replyTo: process.env.FROM_EMAIL
};

const info = await transporter.sendMail(mailOptions);
// Returns: { response: '250 Message accepted', messageId: '<...>' }
```

---

## SEO Component Usage

### Basic Implementation

```typescript
import SEO from '../components/SEO';

export default function MyPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="This is what appears in search results"
        keywords="keyword1, keyword2, keyword3"
        type="website"
      />
      {/* Page content */}
    </>
  );
}
```

### With All Props

```typescript
<SEO
  title="Home"
  description="AI-powered estimating software for contractors. Save time and win more jobs."
  keywords="contractor software, AI estimates, construction management"
  image="https://images.pexels.com/photos/1181406/..."
  url="https://handoff.example.com/"
  type="website"
  author="Handoff"
/>
```

---

## Form Validation Example

### Frontend Validation (React)

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate inputs
  if (!selectedDate || !selectedTime) {
    alert('Please select both date and time slot');
    return;
  }

  setLoading(true);

  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    const response = await fetch(`${apiUrl}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      // Clear form
      setFormData({ /* ... */ });
    } else {
      const error = await response.json();
      alert(error.message);
    }
  } catch (error) {
    alert('Error booking session. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

### Backend Validation (Express)

```javascript
const validateBooking = (data) => {
  const errors = [];

  if (!data.fullName || data.fullName.trim() === '') {
    errors.push('Full name is required');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (data.age <= 0 || data.age > 150) {
    errors.push('Valid age is required');
  }

  return errors;
};

// In route handler
router.post('/bookings', async (req, res) => {
  const validationErrors = validateBooking(req.body);

  if (validationErrors.length > 0) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: validationErrors
    });
  }

  // Create booking...
});
```

---

## API Error Handling

### Global Error Middleware

```javascript
// In backend/server.js
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});
```

### Try-Catch Pattern

```javascript
router.post('/bookings', async (req, res) => {
  try {
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
      return res.status(400).json({
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(400).json({
      message: 'Failed to create booking',
      error: error.message
    });
  }
});
```

---

## Email Template Example

### HTML Email Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: Arial, sans-serif; color: #333; }
      .container { max-width: 600px; margin: 0 auto; }
      .header { background: linear-gradient(to right, #16a34a, #15803d); color: white; }
      .section { margin: 20px 0; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Booking Confirmation</h1>
      </div>

      <div class="content">
        <p>Hello <strong>${booking.fullName}</strong>,</p>

        <div class="section">
          <div class="section-title">Session Details</div>
          <div class="info-row">
            <span class="label">Date:</span>
            <span class="value">${booking.selectedDate}</span>
          </div>
          <div class="info-row">
            <span class="label">Time:</span>
            <span class="value">${booking.timeSlot}</span>
          </div>
        </div>

        <p>Thank you for booking with us!</p>
      </div>
    </div>
  </body>
</html>
```

---

## Database Query Examples

### Get All Bookings (Sorted)

```javascript
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});
```

### Get Booking by ID

```javascript
router.get('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch booking' });
  }
});
```

### Update Booking

```javascript
router.put('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update booking' });
  }
});
```

### Delete Booking

```javascript
router.delete('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking' });
  }
});
```

---

## React Hook Examples

### useFetch Hook

```typescript
// Custom hook for data fetching
function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data: bookings, loading, error } = useFetch('/api/bookings');
```

### useForm Hook

```typescript
// Custom hook for form management
function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm, setValues };
}

// Usage
const { values, handleChange } = useForm({
  fullName: '',
  email: '',
  phoneNumber: ''
});
```

---

## Environment Configuration

### Frontend (.env)

```bash
# Supabase (if using)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxx

# API Configuration
VITE_API_URL=http://localhost:3001
```

### Backend (.env)

```bash
# Server Configuration
PORT=3001
NODE_ENV=development

# Database
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@ezyloan.co.in
SMTP_PASS=Ezysunday@123
FROM_EMAIL=contact@ezyloan.co.in

# Application
APP_NAME=Handoff
APP_URL=http://localhost:5173
```

---

## TypeScript Types

### Booking Type

```typescript
export interface Booking {
  _id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  weight: number;
  height: number;
  age: number;
  condition: string;
  selectedDate: string;
  timeSlot: string;
  createdAt?: string;
}
```

### Blog Type

```typescript
export interface Blog {
  _id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  featured: boolean;
  image: string;
}
```

### SEO Props Type

```typescript
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}
```

---

## Styling Examples

### Tailwind Classes Used

```typescript
// Spacing
className="p-6"          // padding
className="m-4"          // margin
className="gap-8"        // gap between flex items
className="space-y-4"    // vertical spacing

// Colors
className="bg-green-600"     // background
className="text-white"       // text color
className="border-gray-200"  // border

// Responsive
className="grid-cols-1 md:grid-cols-3"  // 1 column mobile, 3 on desktop

// Typography
className="text-4xl font-bold"  // size and weight
className="line-clamp-2"        // truncate text

// Effects
className="shadow-md hover:shadow-lg"  // shadow and hover
className="rounded-lg"                  // border radius
className="transition-colors"           // smooth transition
```

---

## Testing API Endpoints

### Using curl

```bash
# Get all bookings
curl http://localhost:3001/api/bookings

# Create booking
curl -X POST http://localhost:3001/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "occupation": "Developer",
    "weight": 75,
    "height": 180,
    "age": 30,
    "condition": "General Checkup",
    "selectedDate": "24 Mon",
    "timeSlot": "9:00 AM"
  }'

# Get specific booking
curl http://localhost:3001/api/bookings/507f1f77bcf86cd799439011

# Delete booking
curl -X DELETE http://localhost:3001/api/bookings/507f1f77bcf86cd799439011
```

### Using Postman

1. Create new collection
2. Add requests with appropriate HTTP methods
3. Set headers: `Content-Type: application/json`
4. Add request body for POST/PUT requests
5. Test and debug endpoints

---

## Debugging Tips

### Frontend Debugging

```typescript
// Check SEO tags
console.log(document.querySelector('title').innerText);
console.log(document.querySelector('meta[name="description"]').content);

// Check API response
fetch('/api/bookings')
  .then(res => res.json())
  .then(data => console.log('Bookings:', data));

// Check form values
console.log('Form data:', formData);

// Check authentication
console.log('Token:', localStorage.getItem('adminToken'));
```

### Backend Debugging

```javascript
// Log database operations
console.log('Attempting to connect to:', process.env.DATABASE_URL);

// Log email sending
console.log('Sending email to:', booking.email);
console.log('Email sent:', info.messageId);

// Log validation errors
console.log('Validation errors:', validationErrors);

// Check environment variables
console.log('SMTP configured:', !!process.env.SMTP_HOST);
```

---

## Performance Optimization Tips

### Frontend

```typescript
// Use React.memo for expensive components
export default React.memo(function ExpensiveComponent({ data }: Props) {
  return <div>{/* Component */}</div>;
});

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // handle click
}, [dependencies]);

// Use useEffect cleanup for subscriptions
useEffect(() => {
  const subscription = fetchData();
  return () => subscription.unsubscribe();
}, []);
```

### Backend

```javascript
// Add database indexes
// In your database, create indexes on frequently queried fields:
db.bookings.createIndex({ email: 1 });
db.bookings.createIndex({ createdAt: -1 });

// Use lean() for read-only queries
const bookings = await Booking.find().lean();

// Limit query results
const bookings = await Booking.find().limit(10);

// Select specific fields
const bookings = await Booking.find().select('fullName email date');
```

---

## Security Best Practices

### Frontend Security

```typescript
// Validate email before sending
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Sanitize user input
const sanitizeInput = (input: string) => {
  return input.trim().replace(/[<>]/g, '');
};

// Never store sensitive data
// DON'T: localStorage.setItem('password', userPassword);
// DO: localStorage.setItem('token', authToken);
```

### Backend Security

```javascript
// Validate all inputs
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Use environment variables
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

// Never log sensitive data
console.log('Email sent to:', booking.email); // OK
console.log('Password:', password); // NEVER!

// Validate data before saving
const validationErrors = validateBooking(req.body);
if (validationErrors.length > 0) {
  return res.status(400).json({ errors: validationErrors });
}
```

---

## Useful Resources

### Documentation
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Nodemailer](https://nodemailer.com)

### Tools
- [Postman](https://www.postman.com) - API testing
- [MongoDB Compass](https://www.mongodb.com/products/compass) - Database GUI
- [VS Code](https://code.visualstudio.com) - Code editor

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Last Updated**: December 11, 2025
**Version**: 1.0.0
