import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/Homepage.page";
import CartPage from "./pages/Cart/Cart.page";
import WishlistPage from "./pages/Wishlist/Wish-List.page";
import Footer from "./components/Footer/Footer";
import MyLibraryPage from "./pages/MyLibrary/My-library.page";
import LibraryCatalog from "./pages/Library/library-catalog.page";
import AboutMePage from "./pages/About/About.page";
import ProductPage from "./pages/ProductsPage/Product.page";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/library-catalog" element={<LibraryCatalog />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/product/:bookId" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
