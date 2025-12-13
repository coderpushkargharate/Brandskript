# Updated Features - Session Booking System

## Overview

Added complete session booking functionality including:
- Featured blogs displayed on home page
- "Get Started Free" booking form page
- Admin dashboard to manage bookings
- All data persisted to MongoDB

## New Pages & Features

### 1. Home Page Updates (`src/pages/Home.tsx`)
- **Featured Blog Posts Section**: Displays top 3 featured blogs with:
  - Blog images and titles
  - Category badges
  - Author information and dates
  - "Read More Articles" button linking to blog page
- All "Get started free" buttons now link to booking page

### 2. Get Started Page (`src/pages/GetStarted.tsx`)
Complete booking form with:

**Personal Information:**
- Full Name
- Email
- Phone Number
- Occupation

**Health Information:**
- Weight (kg)
- Height (cm)
- Age
- Select a Condition (dropdown with 8 options):
  - General Checkup
  - Weight Loss
  - Muscle Gain
  - Fitness Assessment
  - Nutrition Planning
  - Injury Recovery
  - Athletic Performance
  - Other

**Appointment Selection:**
- Date Picker (7 days: 24 Mon to 30 Sun)
- Time Slot Selection (5 time periods):
  - Night (12AM-4AM)
  - Early Morning (4AM-8AM)
  - Morning (8AM-12PM)
  - Afternoon (12PM-4PM)
  - Evening (4PM-8PM)

**Features:**
- Beautiful gradient background (green to blue)
- Form validation
- Success confirmation with booking details
- All data submitted to MongoDB

### 3. Admin Dashboard Updates (`src/pages/Admin.tsx`)
Two-tab management system:

**Tab 1: Blog Management** (existing + unchanged)
- Create, edit, delete blog posts
- Mark as featured
- Category selection

**Tab 2: Session Bookings** (new)
- View all bookings in table format:
  - Customer name
  - Email
  - Date and time
  - Selected condition
  - Actions (View details, Delete)
- Click to view detailed booking information:
  - All personal details
  - Health metrics
  - Selected date and time
  - Booking timestamp
- Delete individual bookings

## Backend Updates

### New Routes
- `GET /api/bookings` - Fetch all bookings
- `GET /api/bookings/:id` - Get specific booking
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### New Model
**Booking.js** (`backend/models/Booking.js`)
```javascript
{
  fullName: String (required)
  email: String (required)
  phoneNumber: String (required)
  occupation: String (required)
  weight: Number (required)
  height: Number (required)
  age: Number (required)
  condition: String (required)
  selectedDate: String (required)
  timeSlot: String (required)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### Server Updates
- `backend/server.js`: Added booking routes import and usage
- `backend/routes/bookingRoutes.js`: New file with all CRUD operations

## Frontend Updates

### New Type Definition
**src/types/booking.ts**
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

### Routing Updates
**src/App.tsx**: Added GetStarted route
- Path: `/get-started`
- Component: GetStarted page

## Database
All booking data stored in MongoDB with fields:
- Personal info (name, email, phone, occupation)
- Physical metrics (weight, height, age)
- Health condition selected
- Appointment date and time slot
- Automatic timestamps

## Admin Access
- Login: `pushkar` / `pushkar123`
- View and manage all bookings
- Delete bookings as needed
- Switch between blog and booking management tabs

## API Endpoints Summary

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/bookings` | List all bookings |
| POST | `/api/bookings` | Create new booking |
| GET | `/api/bookings/:id` | Get booking details |
| PUT | `/api/bookings/:id` | Update booking |
| DELETE | `/api/bookings/:id` | Delete booking |

## File Structure

```
project/
├── src/
│   ├── pages/
│   │   ├── Home.tsx (updated - added featured blogs)
│   │   ├── GetStarted.tsx (NEW - booking form)
│   │   ├── Admin.tsx (updated - added bookings tab)
│   │   └── Blogs.tsx
│   ├── types/
│   │   ├── blog.ts
│   │   └── booking.ts (NEW)
│   └── App.tsx (updated - added /get-started route)
├── backend/
│   ├── models/
│   │   ├── Blog.js
│   │   └── Booking.js (NEW)
│   ├── routes/
│   │   ├── blogRoutes.js
│   │   └── bookingRoutes.js (NEW)
│   └── server.js (updated - added booking routes)
```

## How It Works

1. **User Books a Session:**
   - Clicks "Get started free" button anywhere on site
   - Fills out booking form with personal/health info
   - Selects date and time slot
   - Submits form

2. **Data is Saved:**
   - Form data sent to backend API
   - Stored in MongoDB `bookings` collection
   - User sees success confirmation

3. **Admin Views Bookings:**
   - Logs into admin dashboard
   - Goes to "Session Bookings" tab
   - Views all bookings in table format
   - Can click to see full details
   - Can delete bookings as needed

4. **Featured Blogs Display:**
   - Home page automatically fetches featured blogs
   - Displays 3 featured blog posts
   - Links to full blog page

## Testing the Feature

1. Start backend: `cd backend && npm start`
2. Start frontend: `npm run dev` (in new terminal)
3. Visit http://localhost:5173/get-started
4. Fill out and submit booking form
5. Go to http://localhost:5173/admin
6. Login with pushkar/pushkar123
7. Click "Session Bookings" tab to see your booking

Enjoy your new booking system!
