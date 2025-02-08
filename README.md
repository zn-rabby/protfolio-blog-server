# Blog Application Server

## Overview

This project provides the backend for a blogging platform where users can write, update, and delete blogs. It includes secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

---

## Features

### User Roles

- **Admin**:
  - Manually created in the database with predefined credentials.
  - Can delete any blog.
  - Can block any user by updating a property `isBlocked`.
  - Cannot update any blog.
- **User**:
  - Can register and log in.
  - Can create, update, and delete their own blogs.
  - Cannot perform admin actions.

### Authentication & Authorization

- Secure user authentication using JWT.
- Role-based access control for Admin and User roles.

### Blog API

- Public API for fetching blogs:
  - Includes search, sort, and filter functionalities.
  - Provides blog title, content, author details, and more.

---

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---

## Installation

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rabby-web/blog-application.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an `.env` file in the root directory and configure the environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/blog-platform
   JWT_SECRET=jwt_access_secret
   ```
4. Start the development server:
   ```bash
   npm run start:dev
   ```
5. Access the API at Vercel `https://blog-application-seven-xi.vercel.app/`.
6. Access the API at Localhost `http://localhost:5000/`.

---

## API Endpoints

### 1. Authentication

- **POST** `/api/auth/register`
- **POST** `/api/auth/login`

### 2. Blog Management

- **POST** `/api/blogs`
- **PATCH** `/api/blogs/:id`
- **DELETE** `/api/blogs/:id`
- **GET** `/api/blogs`

### 3. Admin Actions

- **PATCH** `/api/admin/users/:userId/block`
- **DELETE** `/api/admin/blogs/:id`

---

## Error Handling

A consistent error response format is used across all API endpoints:

```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": { "details": "Additional details" },
  "stack": "Stack trace"
}
```

## Server live link

[Blogs Website](https://blog-application-seven-xi.vercel.app/)
