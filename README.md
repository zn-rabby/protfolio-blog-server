# Next.js Portfolio & Blog Website - Server

## 🚀 Project Overview

This is the backend server for the **Next.js Portfolio & Blog Website**. It provides RESTful APIs to manage blog posts, projects, and contact messages. Built with **Node.js, Express, and MongoDB**, this server ensures smooth data management for the portfolio website.

## 🌟 Features

- **Blog Management**: Create, Read, Update, and Delete blog posts.
- **Project Management**: Handle CRUD operations for portfolio projects.
- **Contact Messages**: Store and manage messages submitted via the contact form.
- **User Authentication**: Secure login using **NextAuth.js**.
- **API Routes**: RESTful API endpoints for seamless integration with the frontend.
- **Database**: Uses MongoDB for efficient data storage and retrieval.

## 🔗 Live Links

- **Live Server**: [https://nextjs-blog-protfolio-server.vercel.app/](https://nextjs-blog-protfolio-server.vercel.app/)
- **Frontend (Client)**: [https://rabby-protfolio.vercel.app/](https://rabby-protfolio.vercel.app/)
- **Client Repository**: [GitHub - Portfolio Client](https://github.com/rabby-web/protfolio-client)

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: NextAuth.js (Social login)
- **Deployment**: Vercel

## 📌 API Endpoints

### 🔹 Blogs

- `GET /api/v1/blogs` - Fetch all blogs
- `GET /api/v1/blogs/:id` - Fetch a single blog post
- `POST /api/v1/blogs` - Create a new blog post (Authenticated)
- `PUT /api/v1/blogs/:id` - Update a blog post (Authenticated)
- `DELETE /api/v1/blogs/:id` - Delete a blog post (Authenticated)

### 🔹 Projects

- `GET /api/v1/projects` - Fetch all projects
- `GET /api/v1/projects/:id` - Fetch a single project
- `POST /api/v1/projects` - Add a new project (Authenticated)
- `PUT /api/v1/projects/:id` - Update project details (Authenticated)
- `DELETE /v1/api/projects/:id` - Remove a project (Authenticated)

### 🔹 Contact Messages

- `POST /api/v1/messages` - Submit a new contact message
- `GET /api/v1/messages` - View all messages (Authenticated)

## 🔧 Setup & Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/rabby-web/protfolio-server.git
   cd protfolio-server
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file and configure the environment variables:**

   ```env
   MONGO_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_next_auth_secret
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the development server:**

   ```sh
   npm run start:dev
   ```

5. **Deploy on Vercel:**
   ```sh
   vercel
   ```

## 🎯 Future Improvements

- Implement role-based access control for admins.
- Add GraphQL support for efficient data fetching.
- Enhance API security with rate limiting and validation.
- Implement caching for faster API responses.

---

🚀 **Happy Coding!** 🎨✨
