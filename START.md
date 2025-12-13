# Quick Start Guide

Follow these steps to run the Handoff website locally:

## Step 1: Seed the Database

Open a terminal and run:

```bash
cd backend
node seed.js
```

You should see:
```
Connected to MongoDB
Cleared existing blogs
Sample blogs inserted successfully
Database seeded successfully!
```

## Step 2: Start the Backend Server

Keep the terminal in the `backend` directory and run:

```bash
npm start
```

You should see:
```
Server is running on port 3001
Connected to MongoDB
```

**Keep this terminal running!**

## Step 3: Start the Frontend

Open a **NEW** terminal window, navigate to the project root directory, and run:

```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## Step 4: Open the Website

Open your browser and go to:
- **Main Site**: http://localhost:5173/
- **Blog Page**: http://localhost:5173/blogs
- **Admin Dashboard**: http://localhost:5173/admin

## Admin Login Credentials

- Username: `pushkar`
- Password: `pushkar123`

## Troubleshooting

### Port Already in Use

If you get an error about port 3001 or 5173 already in use:

**For Backend (Port 3001):**
```bash
# Find and kill the process
lsof -ti:3001 | xargs kill -9
```

**For Frontend (Port 5173):**
```bash
# Find and kill the process
lsof -ti:5173 | xargs kill -9
```

### MongoDB Connection Error

If you see a MongoDB connection error, check:
1. Your internet connection is working
2. The DATABASE_URL in `backend/.env` is correct

### Missing Dependencies

If you see module not found errors:

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
```

## Summary

You need **TWO terminals running**:
1. Backend: `cd backend && npm start`
2. Frontend: `npm run dev`

Then visit http://localhost:5173/ in your browser!
