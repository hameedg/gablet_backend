# Backend Gablet

This is the Backend project of Gablet Assignment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
* You have a Windows/Linux/Mac machine with a command line interface.
* You have read this README.md file.

## Installing Frontend Clone Website

To install Backend on Your Local Machine, follow these steps:

1. Clone the repository
   ```
   git clone https://github.com/hameedg/gablet_backend.git
   ```
2. Navigate to the project directory
   ```
   cd gablet_backend
   ```
3. Install the dependencies
   ```
   npm install
   ```

## Using Backend and Trying to Run Locally

To use Frontend Clone Website, follow these steps:

1. Start the development server
   ```
   npm run dev
   ```
2. Create a .env file if not existing,
   and add,
    ```
   MONGO_URI=mongodb+srv://crapjank:lZ7toooJPPKlmdyi@hameedtoplevelcluster.sk633.mongodb.net/?retryWrites=true&w=majority&appName=gablet
   PORT=5000
   ```
4. Open your web browser and visit `http://localhost:5000/api/properties` in your postman

You should now see the backend running in your postman.

## Building for Production

To create a production build, run:

```
npm run build
```

