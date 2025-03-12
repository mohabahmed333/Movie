# MovieApp

## Description

MovieApp is a React-based movie application built with TypeScript, Vite, and Zustand for state management. It allows users to search for movies, view details, and manage favorites. The app uses an API to fetch movie data dynamically.

## Features Implemented

- 🔍 **Movie Search**: Users can search for movies by title, with infinite scrolling for seamless browsing.
- 🎬 **Movie Details**: View detailed information about each movie, including posters, overviews, and ratings.
- ⭐ **Favorites System**: Users can mark movies as favorites and access them easily.
- 🎭 **Movie Categories & Carousels**: Movies are displayed in categorized lists with carousel sliders.
- ⏳ **Skeleton Loaders**: Enhances user experience with smooth loading states.
- 🌐 **API Integration**: Uses Axios to fetch movie data from an external API.
- 🖥️ **Responsive UI**: Designed with Tailwind CSS for a modern and mobile-friendly interface.
- 🚀 **Optimized Performance**: Built with Vite for fast loading times.
- 🛠️ **State Management**: Utilizes Redux for managing global state.
- 🔄 **Efficient Data Fetching & Caching**: Implements **React Query** for data fetching, caching, and synchronization.
- 🛠️ **Lazy Loading & Code Splitting**: Ensures an optimized experience with efficient resource loading.

## Folder Structure

MovieTests/
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Main application pages (Home, Movie, Search, Favorites)
│ ├── hooks/ # Custom React hooks
│ ├── services/ # API call functions
│ ├── store/ # Zustand state management
│ ├── constants/ # API base URLs and other constants
│ ├── helpers/ # Utility functions (debounce, axios setup)
│ ├── assets/ # Static assets (images, icons)
│── public/ # Public assets
│── package.json # Dependencies and scripts
│── vite.config.ts # Vite configuration

📌 Contribution
Want to contribute? Follow these steps:

Fork the repository.
Create a new branch (feature/your-feature).
Make changes and commit.
Push to your branch and submit a pull request.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MovieTests.git
   cd MovieTests
   ```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`
