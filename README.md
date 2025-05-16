# 📚 Tales & Tomes

A sleek, interactive book discovery and management platform built with **React** and **Vite**. Browse a live-updating library catalog, search books by keyword, and manage your personal **wishlist**, **cart**, and **reading progress** — all from a single UI.

---

## ✨ Features

### 🔍 Homepage Search

- Live search powered by OpenLibrary API
- Search results display book cover, title, author
- Click "View Details" to navigate to the product page
- Add or remove books from:
  - ✅ Wishlist
  - 🛒 Cart

### 📖 Library Catalog

- Infinite scroll: loads more books as you scroll
- Full integration with cart and wishlist state
- Matches OpenLibrary book data with your local state

### 📁 My Library Page (coming soon)

- Drag-and-drop interface to track reading status:
  - Not Read → Reading → Read

### 🛒 Cart Page

- Displays books added to your cart
- Remove items or proceed to checkout flow

### ❤️ Wishlist Page

- Tracks all books marked as "Wishlist"
- Reversible action (remove from wishlist)

---

## 🛠 Tech Stack

- **Frontend:** React + Vite
- **API:** OpenLibrary REST API
- **State Management:** useState, custom `useBookActions` hook
- **Backend (mock):** JSON Server (hosted on Railway)
- **Styling:** Plain CSS modules by page/component

---

## 📂 Project Structure

```

src/
│
├── components/
│   ├── BookCardButtons.jsx
│   ├── Search.jsx
│   └── Footer/ & Navbar/
│
├── hooks/
│   ├── useBookActions.js
│   └── useFetch.js
│
├── pages/
│   ├── HomePage/
│   ├── Library/
│   ├── MyLibrary/
│   ├── Cart/
│   ├── Wishlist/
│   └── About/
│
├── services/
│   └── books.service.js
│
├── App.jsx
└── Main.jsx

```

---

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

````

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Run JSON Server mock backend (if modifying backend):**

   ```bash
   npm run backend
   ```

4. Access the app at: `http://localhost:5173`

---

## 🌐 Live Demo

[🔗 Hosted App on Vercel/Railway (coming soon)](#)

---

## 📖 API Reference

* [OpenLibrary Search API](https://openlibrary.org/dev/docs/api/search)
* [OpenLibrary Covers API](https://openlibrary.org/dev/docs/api/covers)

---

## 🙌 Acknowledgements

* [OpenLibrary](https://openlibrary.org/)
* [Railway](https://railway.app/)
* [Vite](https://vitejs.dev/)

---

## 🧠 Future Enhancements

* User authentication & profiles
* Book reviews and ratings
* Save progress across sessions
* Real checkout functionality with payment integration
````
