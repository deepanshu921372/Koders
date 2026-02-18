# Docket Frontend

React-based UI for Docket - a task management application.

## Tech Stack

- React 18
- Vite
- Axios
- React Icons

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- Create, edit, and delete tasks
- Mark tasks as completed or pending
- Filter tasks by status (All/Pending/Completed)
- Task statistics display
- Responsive design
- Form validation

## Project Structure

```
docket-frontend/
├── src/
│   ├── components/        # React components
│   │   ├── TaskStats.jsx
│   │   ├── FilterBar.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskCard.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── EmptyState.jsx
│   │   ├── Loader.jsx
│   │   └── index.js
│   ├── services/
│   │   └── api.js         # API service
│   ├── styles/            # CSS files
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Configuration

The API base URL is configured in `src/services/api.js`. Default is `http://localhost:3008/api`.
