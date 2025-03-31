# Carbon Quest 🌳

**Note:** The game is currently available in French only.

Carbon Quest is an educational platformer about Green IT, where you test and explore best practices to reduce the environmental impact of digital technologies.

## 🎯 Goal

Climb to the top of the canopy while answering eco-friendly web development questions. The more correct answers you get, the better your score!

## 🎮 How to Play

- Move using the arrow keys and space bar.
- Answer questions from forest spirits along the way.
- Wrong answers won’t stop you, but they will impact your final score.
- Reach the top, review your answers, and learn more about Green IT!

Can you reduce digital pollution?

---

## 🚀 Live Demo

Create an account (email will not be stored) or use:  
**Username:** Test  
**Password:** Test12345

👉 [Play Now](https://super-carbon-quest.vercel.app/)

![Carbon Quest Demo](https://github.com/amandineameye/Carbon_Quest/blob/main/frontend/src/assets/carbon_quest.gif?raw=true)

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Game Engine**: Unity, C#
- **Hosting:** Vercel

---

## 🏃‍♀️ How to Run Locally

Ensure you have **Node.js** (v23.7.0 or a compatible version) installed on your machine.
If you haven’t installed it yet, you can get it from the [official Node.js website](https://nodejs.org/en/download).

## Frontend Setup

Create a `.env` file in the frontend directory and add:

```env
VITE_API_URL=http://localhost:3001/
```

Run:

```sh
npm install
npm run dev
```

## Backend Setup

Create a `.env` file in the backend directory and add:

```env
FRONTEND_URL=http://localhost:5173
PORT=3001
MONGODB_CONNECTION_STRING=your mongodb connection string (see next section)
```

Run:

```sh
npm install
npm run dev
```

---

## Database Setup

### Option 1: Using MongoDB Atlas (Cloud)

1. Create a **MongoDB Atlas** account.
2. Set up a **free cluster**.
3. In the **Atlas dashboard**, go to **Network Access** and add your **IP address** (or use `0.0.0.0/0` to allow all connections).
4. Update your backend `.env` file with your own connection string:

```env
MONGODB_CONNECTION_STRING=your-mongodb-connection-string
```

### Option 2: Using Local MongoDB

1. Install **MongoDB Community Edition** from [MongoDB’s website](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server (usually by running `mongod`).
3. Update your backend `.env` file:

```env
MONGODB_CONNECTION_STRING=mongodb://localhost:27017
```

---

## 🔮 Future Improvements

- **Mobile Version:**
  Currently, the game is not optimized for mobile. A fully responsive version is planned.

- **Music Handling:**

  - When returning to the home page, the music stops and restarts when playing again.
  - Add a button to stop the music manually.

- **Game Flow:**

  - Refreshing the page during gameplay redirects to the home page.
  - Improve question handling: currently, skipping a question automatically selects the opposite answer.

- **User Experience:**
  - Fix an issue where login/registration inputs sometimes don't work on the home page.
  - Implement an English version.
  - Allow users to reset their password via email.
