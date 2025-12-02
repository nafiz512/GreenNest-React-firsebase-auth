# GreenNest – Smart Plant Store & Care Guide

GreenNest is a modern **React.js web application** designed for plant lovers to explore, learn, and purchase indoor plants.  
It provides an interactive, animated, and mobile-friendly experience with smooth scroll effects and Firebase-powered authentication.

---

## Live Demo

**Live Website:** <a href="https://greennest-2d277.web.app" target="blank" rel="noopener noreferrer">https://greennest-2d277.web.app/plants</a>

---

## Project Overview

GreenNest combines aesthetics and functionality for an enhanced user experience.  
It’s built using **ReactJS + Vite**, styled with **TailwindCSS**, and integrated with **Firebase** for authentication and hosting.

This project demonstrates:

-   Modern React component structure
-   Firebase Auth integration
-   Animation libraries like AOS
-   Optimized image rendering
-   Responsive mobile-first design
-   Clean routing and state management

---

## ⚙️ Technologies & Tools Used

### **Core Technologies**

| Technology                        | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| **React.js (with Vite)**          | Frontend JavaScript library for building UI          |
| **React Router DOM**              | Routing between multiple pages/components            |
| **Firebase**                      | Authentication (Google & Email-Password) and hosting |
| **Tailwind CSS**                  | Utility-first CSS framework for responsive styling   |
| **DaisyUI**                       | Tailwind component library for prebuilt UI elements  |
| **AOS (Animate On Scroll)**       | Adds beautiful scroll-based animations               |
| **React Hot Toast**               | Lightweight notification/toast alert system          |
| **React Icons**                   | Vector icons used throughout the UI                  |
| **Lucide React / Shadcn UI**      | Modern styled components (optional enhancement)      |
| **Framer Motion**                 | Optional smooth animation library                    |
| **Pexels API Images (optimized)** | High-quality plant images resized for performance    |

---

## NPM Packages Used

| Package                | Purpose                      |
| ---------------------- | ---------------------------- |
| `react`                | Core React library           |
| `react-dom`            | DOM rendering for React      |
| `react-router-dom`     | Routing and navigation       |
| `firebase`             | Authentication & hosting     |
| `aos`                  | Scroll-based animations      |
| `react-hot-toast`      | Toast notifications          |
| `react-icons`          | Icon pack                    |
| `tailwindcss`          | Styling framework            |
| `daisyui`              | Tailwind UI components       |
| `framer-motion`        | Smooth animations            |
| `vite`                 | Fast development environment |
| `eslint`               | Code quality and linting     |
| `@vitejs/plugin-react` | React plugin for Vite        |

---

## ️ Folder Structure

```
GreenNest/
├── public/
│   └── plants.json               # Local data source for plant info
├── src/
│   ├── assets/                   # Static assets (logos, images)
│   ├── Components/               # Reusable UI components
│   │   ├── Hero.jsx
│   │   ├── TopPlant.jsx
│   │   ├── PlantCareTips.jsx
│   │   ├── GreenExperts.jsx
│   │   ├── EcoDecorIdeas.jsx
│   │   ├── PlantOfTheWeek.jsx
│   │   └── Footer.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Profile.jsx
│   ├── AuthContext/
│   │   └── AuthContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── firebase.config.js
├── .firebaserc
├── firebase.json
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
cd greennest
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Firebase

Create a `.env` file in the root directory and add your Firebase config:

```bash
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Visit the app locally at `http://localhost:5173`

---

## ☁️ Firebase Deployment

1. Build the project:

    ```bash
    npm run build
    ```

2. Initialize Firebase (if not done yet):

    ```bash
    firebase init
    ```

3. Deploy:
    ```bash
    firebase deploy
    ```

---

## UI & Design Features

-   Green-themed minimal design
-   ⚡ Smooth fade/slide animations using **AOS**
-   Beautiful toast messages for user feedback
-   Fully responsive layout (mobile-first)
-   Profile dropdown with avatar
-   Optimized plant images using Pexels `?auto=compress&cs=tinysrgb&w=800`

---

## Performance Optimization

-   ✅ Compressed images via Pexels resizing
-   ✅ Lazy loading (React + AOS scroll animations)
-   ✅ Firebase hosting for CDN-level speed
-   ✅ Component-level rendering for efficiency

---

## Future Enhancements

-   Shopping cart and checkout system
-   Watering reminder system (localStorage)
-   Backend database (Firestore or MongoDB)
-   Advanced filtering and search features
-   Image lazy loading & pagination

---

## ‍ About the Developer

**Author:** [Nafiz Muntasir]  
**Email:** [nafizmuntasir13@gmail.com](mailto:nafizmuntasir13@gmail.com)  
**Facebook:** [https://www.facebook.com/nafiz.muntasir.245464](#)

---

## Quote

> “Grow green. Live clean.” — _GreenNest Team_

---

## License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it for learning or development purposes.
