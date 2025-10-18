# Simple CRUD Application

## 🚀 Welcome, Future Developer!

This project, **Simple CRUD**, is a complete (full-stack) application designed specifically to help you understand the fundamental concepts of modern web development.

It implements the **CRUD** operations: **C**reate, **R**ead, **U**pdate, and **D**elete. This is the foundation of almost every dynamic application you will ever build!

We built this project using a clear separation between the server (Backend) and the user interface (Frontend). This is a professional standard known as the **Client-Server Architecture**.

## 🛠️ Technology Stack

This project is a perfect example of a modern, decoupled architecture.

| Component | Technology | Role in the Project |
| :--- | :--- | :--- |
| **Backend (Server)** | **Node.js** (runtime) & **Express.js** (framework) | Handles business logic, serves the API, and communicates with the database. |
| **Database ORM** | **Prisma** | A next-generation Object-Relational Mapper (ORM) that makes it easy to interact with the database using **TypeScript/JavaScript** code. |
| **Frontend (Client)** | **Modern JavaScript Framework** (e.g., React, Vue, or Svelte) | The user interface (UI). It handles routing, components, and state management (`stores`). |

## 🧠 Architectural Concepts (How It Was Made)

This project follows a well-organized structure to ensure the code is maintainable and scalable.

### 1. The Backend Structure

The Backend is separated into distinct layers. This concept, known as **Separation of Concerns**, is crucial for professional development:

* **`src/routes`**: These files define the specific **API Endpoints** (like `/users` or `/products`) that the Frontend calls to request or submit data.
* **`src/middlewares`**: This is where we place functions that run *before* or *after* a route handler, like **authentication** checks (is the user logged in?) or **input validation**.
* **`src/respository`**: This layer is responsible *only* for interacting directly with the database using **Prisma**. It keeps the business logic clean from database commands.
* **`src/features`**: This layer holds the **business logic** (e.g., "When a user registers, send a welcome email"). It calls the repository layer to handle data.

### 2. The Frontend Structure

The Frontend uses a component-based approach and manages state:

* **`src/pages` & `src/router`**: This handles which components are displayed for a specific URL (e.g., `/home` or `/dashboard`).
* **`src/components`**: Small, reusable pieces of the UI (e.g., a "Button" component or a "User Card" component).
* **`src/stores`**: This is where the application **state** (the data currently being displayed, like a list of items) is managed.

### 3. API Communication

The Frontend communicates with the Backend using the **`src/api`** folder. This folder contains functions that send **HTTP requests** (GET, POST, PUT, DELETE) to the Backend's defined routes, making sure the data flows correctly between the server and the client.

## 🏁 Getting Started (Setup)

To run this project on your machine, you generally need to follow these steps:

1.  **Clone the Repository:** Download the project files.
2.  **Install Dependencies:** Navigate to both the `BackEnd` and `FrontEnd` folders and run the package installer command (usually `npm install` or `yarn install`).
3.  **Setup Environment Variables:** Create a **`.env`** file in the `BackEnd` folder (it’s ignored by Git for security) to hold sensitive configuration details like database connection strings and security secrets.
4.  **Database Setup:** Run the necessary commands for Prisma to generate the database schema.
5.  **Run the Servers:** Start both the Backend server and the Frontend development server (commands like `npm run dev` or `npm start` are common).

## 💡 Learning Opportunities

As you explore this project, focus on these key areas:

* **Data Flow:** Trace a single operation (e.g., adding a new item) from the Frontend component to the API folder, through the Backend route, to the service layer, down to the repository, and finally into the database.
* **Prisma Schemas:** Understand how your database tables are defined in the Prisma schema file.
* **Reusable Components:** See how the Frontend uses components to build complex UIs from smaller pieces.