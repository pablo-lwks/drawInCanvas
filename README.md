# Vue 3 Drawable Canvas Component

This project is a demonstration of how to create a reusable Vue 3 component that overlays a drawable canvas on top of another UI component passed as a prop or slot. It is built using **Vite**, Vue 3, Tailwind CSS, and Pinia for state management, and it follows the Feature-Sliced Design (FSD) architecture.

## ✨ Features

* **Drawable Overlay**: A widget that provides a canvas area where users can draw freely.
* **Component Composition**: The drawing widget is designed to wrap any other UI component.
* **Reactive Drawing**: Uses `fabric.js` for a powerful and interactive canvas experience.
* **Library Agnostic**: A canvas adapter layer makes it easy to swap out the underlying drawing library without refactoring the component.
* **State Management**: Centralized state management for canvas data using Pinia.
* **Modern Stack**: Built with Vite, Vue 3 (Composition API), and styled with Tailwind CSS.
* **Scalable Architecture**: Organized using the Feature-Sliced Design (FSD) methodology for maintainability.

## 🛠️ Tech Stack

* **Framework**: [Vue 3](https://vuejs.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: [Pinia](https://pinia.vuejs.org/)
* **Canvas Library**: [Fabric.js](http://fabricjs.com/) (via an abstraction layer)
* **Language**: TypeScript

## 📂 Project Structure (Feature-Sliced Design)

The project follows the FSD methodology to ensure a clear separation of concerns and improved scalability.
