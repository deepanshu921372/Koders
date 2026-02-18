# Docket Backend

REST API server for Docket - a task management application.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```
PORT=3008
MONGODB_URI=mongodb://localhost:27017/docket
NODE_ENV=development
```

3. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create new task |
| PUT | /api/tasks/:id | Update task |
| PATCH | /api/tasks/:id/status | Toggle task status |
| DELETE | /api/tasks/:id | Delete task |

## Project Structure

```
docket-backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── taskController.js  # Route handlers
├── models/
│   └── Task.js            # Mongoose model
├── routes/
│   └── taskRoutes.js      # API routes
├── middleware/
│   └── errorHandler.js    # Error handling
├── server.js              # Entry point
└── package.json
```
