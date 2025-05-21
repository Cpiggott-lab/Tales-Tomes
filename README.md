# 📚 Tales & Tomes

**Tales & Tomes** is a full-stack book discovery and personal library app built with React and JSON-Server. It combines live book data with personal collection management, wishlists, and drag-and-drop reading status tracking. Think of it as your personal bookstore meets library shelf!

---

### 🚀 Features

### 🔍 Home Page

- **Live Upcoming Releases** – Fetches and displays books releasing soon via OpenLibrary API.
- **Infinite Scroll Catalog** – Endless list of fiction books for sale.
- **Search Functionality** – Search books by title or keyword.

### 🛒 Shopping Functionality

- **Buy Button** – Add books to your cart for checkout.
- **Wishlist Button** – Save books to wishlist if you want to read them later.
- **Cart Page** – View and manage selected books before checkout.

### 📚 Your Library (3-Column Tracker)

- Organize books into:
  - **Not Read**
  - **Reading**
  - **Finished**
- Drag-and-drop interface for moving books between columns.
- Powered by a dedicated API for owned books.

### ❤️ Wishlist Page

- View all books saved from the catalog.
- Remove from wishlist or move to “Your Library” to start reading.

---

## 🛠️ Tech Stack

### Frontend

- **React** (Vite)
- **JavaScript (ES6+)**
- **React Router**
- **Axios**
- **CSS Modules**

### Backend

- **JSON-Server** for mock REST API
- Custom endpoints for:
  - `/library` (owned books)
  - `/wishlist`
  - `/cart`

---

## 📁 Folder Structure (Simplified)

```

📁 tales-tomes/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── LibraryCatalog.jsx
│   │   ├── CartPage.jsx
│   │   └── ...
│   ├── hooks/
│   │   └── useFetch.js
│   ├── services/
│   │   └── books.service.js
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── db.json
├── package.json
└── README.md

```

---

## 🧠 Key Concepts

- **Modular Components**: Reusable components like `BookCard`, `BookCover`, `BookInfo`, `BookCardButtons`.
- **State Management**: Local state managed with `useState`, and custom hooks for API actions (`useBookActions`).
- **Dynamic Routing**: `/product/:type` route renders category-based book pages.
- **Drag-and-Drop Logic**: Move books in the library using interactive columns backed by API updates.
- **Dark Mode Toggle**: User preference saved via `localStorage`.

---

## 🧪 In Progress / Planned

- [ ] User authentication & saved sessions
- [ ] Ratings & reviews
- [ ] Book details modal with descriptions and cover
- [ ] Admin panel for book management
- [ ] Hosting backend on Railway/Render, frontend on Netlify

---

## 🖼️ Screenshots

_(Add screenshots here once available, like homepage, drag-and-drop UI, and wishlist)_

---

## 💾 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/tales-tomes.git
cd tales-tomes

# Install dependencies
npm install

# Start Vite frontend
npm run dev
```

In a separate terminal:

```bash
# Start backend JSON-Server
cd backend
npm install
npm run start
```

Make sure `db.json` exists in the backend directory and points to correct endpoints (`/wishlist`, `/cart`, `/library`).

---

## 🔗 APIs Used

- [OpenLibrary Search API](https://openlibrary.org/dev/docs/api/search)
- [OpenLibrary Covers API](https://openlibrary.org/dev/docs/api/covers)

---

## 👨‍💻 Author

**Christopher Piggott**
Learning full-stack web development with a focus on React, Node.js, and project-based learning.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
