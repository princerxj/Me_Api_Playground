# JD-Assign

## Project Overview

JD-Assign is a full-stack web application for managing professional profiles, skills, projects, and work experiences. It allows users to create, view, edit, and delete profiles, each containing detailed information about education, skills, projects, work experience, and social links. The project is designed for portfolio management, team skill tracking, or as a template for job assignment platforms.

---

## Architecture

```
+-------------------+        +-------------------+        +-------------------+
|    Frontend       | <----> |    Backend        | <----> |    Database       |
| (EJS Templates)   |        | (Express.js)      |        | (MongoDB/Mongoose)|
+-------------------+        +-------------------+        +-------------------+
        |                            |                            |
        |   Static Assets (CSS/JS)    |                            |
        +----------------------------+----------------------------+
```

- **Frontend:** EJS templates rendered by Express, styled with custom CSS.
- **Backend:** Node.js with Express.js, modular routes/controllers, validation, and error handling.
- **Database:** MongoDB, using Mongoose for schema enforcement and queries.
- **Key Integrations:** Joi for schema validation, express-rate-limit for rate limiting, dotenv for environment management.

---

## Setup Instructions

### Local Development

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd JD-Assign
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   Create a `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/jdassign
   NODE_ENV=development
   PORT=3000
   ```
4. **Seed the database (optional):**
   ```sh
   node seed.js
   ```
5. **Run the application:**
   ```sh
   npm start
   ```
6. **Access the app:**
   Visit [http://localhost:3000](http://localhost:3000)

### Production Deployment

1. **Provision a MongoDB instance** (Atlas or self-hosted).
2. **Set production environment variables** in `.env`:
   ```
   MONGO_URI=<your-production-mongo-uri>
   NODE_ENV=production
   PORT=8080
   ```
3. **Install dependencies and build:**
   ```sh
   npm install
   ```
4. **Run with a process manager (recommended):**
   ```sh
   pm2 start server.js or node server.js
   ```
5. **Configure hosting** (Node.js-compatible host, e.g., Heroku, AWS, DigitalOcean).

---

## Database / Schema

- **Database:** MongoDB
- **Main Collection:** `profiles`
- **Schema:**
  - `name` (String, required)
  - `email` (String, required, unique)
  - `education` (String, max 500 chars)
  - `skills` (Array of String, required)
  - `projects` (Array of Object: title, description, link)
  - `workExperience` (Array of Object: jobTitle, company, location, startDate, endDate, description)
  - `links` (Object: github, linkedin, portfolio)

See [`schema.md`](./schema.md) for full details and example documents.

- **Indexes:**
  - Unique index on `email`
  - Optional text indexes on `skills`, `projects.title`, `workExperience.jobTitle`

---

## Features Summary

- Create, view, edit, and delete professional profiles
- Add/remove skills, projects, and work experiences dynamically
- View top skills and related projects
- Rate limiting and basic security headers
- Server-side and client-side validation
- RESTful API endpoints for profiles, skills, projects, and health checks
- Basic authentication for profile editing (can be customized)
- Seed script for demo data
- Modular MVC structure

---

## Sample Requests / API Usage

### Create Profile (cURL)
```sh
curl -X POST http://localhost:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prince Raj",
    "email": "prince@example.com",
    "education": "B.Tech in Computer Science",
    "skills": ["JavaScript", "Node.js", "MongoDB"],
    "projects": [{
      "title": "Chat App",
      "description": "Real-time chat application using Socket.io",
      "link": "https://github.com/prince/chat-app"
    }],
    "workExperience": [{
      "jobTitle": "Software Intern",
      "company": "Tech Corp",
      "location": "Bangalore, India",
      "startDate": "2024-06-01T00:00:00.000Z",
      "endDate": "2024-12-31T00:00:00.000Z",
      "description": "Worked on backend APIs using Node.js"
    }],
    "links": {
      "github": "https://github.com/prince",
      "linkedin": "https://linkedin.com/in/prince",
      "portfolio": "https://princeraj.dev"
    }
  }'
```

### Get Top Skills (cURL)
```sh
curl -X GET http://localhost:3000/skills/top
```

### Get Projects by Skill (cURL)
```sh
curl -X GET "http://localhost:3000/projects?skill=JavaScript"
```

### Health Check (cURL)
```sh
curl -X GET http://localhost:3000/health
```

### Postman Collection
- Import the above JSON requests as examples.
- Set `Content-Type: application/json` for POST/PUT requests.

---

## Known Limitations

- No user authentication/authorization for profile creation (basic auth only for edit route)
- No advanced error handling or logging
- No automated deployment scripts
- No frontend SPA; uses server-rendered EJS templates
- No file/image upload for profile avatars
- No email verification or notifications
- Basic validation only; edge cases may not be fully covered

---

## Resume

[View Resume](https://drive.google.com/file/d/1Im2sKXN9DVgnmCLLbqauWvhZ9CUENuvT/view?usp=drive_link)

