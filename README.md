Synebo Todo Application
Welcome to the Synebo Todo application! This project showcases my solution to the frontend challenge provided by Synebo. Below, you'll find detailed information about the project, its setup, the technologies used, and the features implemented.

The Synebo Todo application is developed as part of a frontend challenge aimed at demonstrating proficiency in modern web development technologies. The application provides a responsive user interface for managing tasks with additional features like theme toggling and state management.

Challenge Requirements
The challenge specified the following user capabilities:

Responsive Design: The app should provide an optimal layout for different device screen sizes.
Interactive Elements: Hover states should be visible for all interactive elements.
Add Todos: Users should be able to add new todos to the list.
Complete Todos: Users should be able to mark todos as complete.
Delete Todos: Users should be able to delete todos from the list.
Filter Todos: Users should be able to filter todos by all, active, and complete statuses.
Clear Completed: Users should be able to clear all completed todos.
Bonus Feature: Users should be able to drag and drop to reorder items on the list.
The project was built using React and TypeScript, with Zustand for state management and Vite for the build tool. It also includes a light and dark theme toggle feature.

Technologies Used
This project leverages the following technologies:

React: A JavaScript library for building user interfaces.
TypeScript: A statically typed superset of JavaScript that enhances code quality and maintainability.
Vite: A fast build tool and development server.
Sass: A preprocessor scripting language that is interpreted or compiled into CSS.
Zustand: A small, fast, and scalable state-management solution.
ESLint: A tool for identifying and fixing problems in JavaScript code.
Getting Started
To get a local copy up and running follow these simple steps:

Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)
npm (v6 or later)
Installation
Clone the repo:
sh
Copy code
git clone https://github.com/your-username/synebo-todo.git
Navigate to the project directory:
sh
Copy code
cd synebo-todo
Install dependencies:
sh
Copy code
npm install
Running the Development Server
Start the development server:

sh
Copy code
npm run dev
Open http://localhost:3000 to view it in the browser.

Scripts
Here are the scripts available in this project:

npm run dev: Starts the development server using Vite.
npm run build: Builds the project for production.
npm run lint: Lints the project using ESLint.
npm run preview: Previews the production build.
Project Structure
The project structure is organized as follows:

php
Copy code
synebo-todo/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── components/         # React components
│   ├── styles/             # SCSS stylesheets
│   ├── store/              # Zustand store
│   ├── App.tsx             # Main App component
│   ├── index.tsx           # Entry point
│   └── ...
├── .eslintrc.js            # ESLint configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Project metadata and dependencies
└── ...
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.
