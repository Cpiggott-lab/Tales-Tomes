import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage.page";
import CartPage from "./pages/Cart.page";
import WishlistPage from "./pages/Wish-List.page";
import BookDetailsPage from "./pages/Book-details.page";
import Footer from "./components/Footer";
import MyLibraryPage from "./pages/My-library.page";
import LibraryCatalog from "./pages/library-catalog.page";
import AboutMePage from "./pages/About.page";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-library" element={<MyLibraryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/library-catalog" element={<LibraryCatalog />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
