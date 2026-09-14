# 🧱 Dev Stack Builder Website

A modern React-based web application where developers can explore various tools and technologies, build their custom development stack, and manage selected tools dynamically with live notifications.

## 🚀 Live Links

- **Live Website:**
- **GitHub Repository:**

## ✨ Features

1. **Interactive Stack Management:** Add technologies to your personal sidebar stack or remove them (individually or all at once) without duplicate entries.
2. **Toastify Notifications:** Real-time visual feedback using `react-toastify` for adding tools, trying to add duplicates, and clearing items.
3. **Responsive UI & Loading States:** Built with Tailwind CSS and DaisyUI, featuring a responsive layout with a mobile hamburger menu and asynchronous loading states.

## 🛠️ Technologies Used

- React.js (Vite)
- Tailwind CSS & DaisyUI
- React-Toastify
- JSON Data Fetching

---

## ❓ Assignment Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup inside a JavaScript file. React uses JSX to easily combine UI markup and rendering logic in one place, making component code much cleaner, readable, and easier to maintain than manually using `React.createElement()`.

### 2. What is the difference between props and state?

- **Props (Properties):** Immutable (read-only) data passed down from a parent component to a child component to configure it.
- **State:** Mutable, local data managed internal to a component. When state values change (via updater functions), React automatically re-renders the component to reflect the changes on the screen.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to store and manage local state variables. In this project, I used `useState` in `Technologies.jsx` to store:

- `technologies`: The list of technologies fetched from JSON.
- `stack`: The array of user-selected technologies.
- `loading` and `error`: UI feedback states during data fetching.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets us perform side-effects in component render cycles, such as data fetching, subscriptions, or DOM updates. I used it to run an asynchronous `fetch('/data.json')` call when the `Technologies` component mounts for the first time.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React relies on unique `key` props to track which items in a dynamically rendered list have changed, been added, or removed. It optimizes DOM rendering performance by ensuring React updates only the specific elements that changed rather than re-rendering the entire list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means rendering different components or UI markup based on dynamic truthy/falsy logic. In `YourStack.jsx`, I used conditional rendering to check `stack.length === 0`:

- If true, it displays the "Your stack is empty" standard UI message.
- If false, it renders the active list of selected tech items alongside the "Remove All" button.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent to Child:** Data is passed down directly via custom XML attributes on the child element, which the child receives as an object called `props`.
- **Child to Parent:** The parent passes a callback function down to the child as a prop. When an event happens in the child component (like clicking a button), the child calls that function and passes data back up as arguments.
