# Fullstack Assignment

This project is a full-stack application split into two main parts: the frontend and the backend. Both parts are built using TypeScript and managed with Yarn.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Project](#running-the-project)
  - [Backend](#start-backend)
  - [Frontend](#start-frontend)
- [Accessing the Application](#accessing-the-application)
- [Additional Notes](#additional-notes)


## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (>= 14.x)
- **Yarn** (>= 1.x)
- **TypeScript** (>= 4.x)

## Setup Instructions

### Backend

1. Navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Environment Variables:

   - Create a `.env` file in the backend folder and add the necessary environment variables.
   - Example:

    ```makefile
    DATABASE_URL=your_database_url
    PORT=4000
    NODE_ENV=DEV
    FRONTEND_URL=http://localhost.com/5173
    ```

4. Build the backend:

    ```bash
    yarn build
    ```

### Frontend

1. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Environment Variables:

   - Create a `.env` file in the frontend folder and add the necessary environment variables.
   - Example:

    ```bash
    VITE_API_URL=http://localhost:4000/api/v1
    ```

4. Build the frontend:

    ```bash
    yarn build
    ```

## Running the Project

### Start Backend

To start the backend server:

```bash
cd backend
yarn start
```

### Start Frontend

To start the frontend development server:

```bash
cd frontend
yarn start
```

## Accessing the Application

- The backend server will run on [http://localhost:4000](http://localhost:4000)
- The frontend server will run on [http://localhost:5173](http://localhost:5173)

## Additional Notes

- Ensure the backend server is running before starting the frontend to avoid any API-related errors.
- Both the backend and frontend are written in TypeScript, ensuring type safety throughout the project.
