# Handoff - Contractor Management Website

A full-stack web application built with React, Vite, Node.js, Express, and MongoDB. Features include a landing page, blog section, and admin dashboard for managing blog posts.

## Features

- Modern landing page showcasing contractor management software
- Blog section with featured and latest posts
- Category filtering for blog posts
- Admin dashboard for managing blog content
- Secure admin authentication
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (icons)

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS
- dotenv

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (connection string provided)

## Installation

### 1. Clone the repository

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Environment Variables

Frontend `.env` file (root directory):
```
VITE_API_URL=http://localhost:3001
```

Backend `.env` file (backend directory):
```
PORT=3001
DATABASE_URL=mongodb+srv://dibyanshassociates_db_user:ezyloan@cluster0.fu8pfj4.mongodb.net/mydatabase?retryWrites=true&w=majority
```

## Running the Application

### 1. Seed the Database (First time only)

```bash
cd backend
node seed.js
```

This will populate the database with sample blog posts.

### 2. Start the Backend Server

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:3001`

### 3. Start the Frontend Development Server

In a new terminal, from the root directory:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Admin Access

To access the admin dashboard:

1. Navigate to the footer and click "Admin" link, or go directly to `/admin`
2. Login credentials:
   - Username: `pushkar`
   - Password: `pushkar123`

## Project Structure

```
.
├── backend/
│   ├── models/
│   │   └── Blog.js
│   ├── routes/
│   │   └── blogRoutes.js
│   ├── .env
│   ├── package.json
│   ├── seed.js
│   └── server.js
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── Admin.tsx
│   │   ├── Blogs.tsx
│   │   └── Home.tsx
│   ├── types/
│   │   └── blog.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/blogs` - Get all blogs (optional query param: `category`)
- `GET /api/blogs/:id` - Get a single blog by ID
- `POST /api/blogs` - Create a new blog post
- `PUT /api/blogs/:id` - Update a blog post
- `DELETE /api/blogs/:id` - Delete a blog post

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start the server
- `node seed.js` - Seed the database with sample data

## Features in Detail

### Landing Page
- Hero section with call-to-action
- Statistics showcase
- Feature highlights
- Customer testimonials section
- How it works section
- Target audience section

### Blog Section
- Featured posts displayed prominently
- Category filtering (All Posts, Case Studies, Guides, Resources, Updates)
- Responsive card layout
- Author and date information

### Admin Dashboard
- Secure login system
- Create, read, update, and delete blog posts
- Rich form for blog management
- Mark posts as featured
- Category selection
- Image URL support

## Deployment Notes

For production deployment:

1. Update the `VITE_API_URL` in the frontend `.env` to point to your production backend URL
2. Ensure MongoDB Atlas whitelist includes your production server IP
3. Build the frontend: `npm run build`
4. Serve the `dist` folder using a static hosting service
5. Deploy the backend to a Node.js hosting platform

## License

This project is created for demonstration purposes.
