import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage.page";
import CartPage from "./pages/Cart.page";
import WishlistPage from "./pages/Wish-List.page";
import ProductDetailsPage from "./pages/Product-details.page";
import Footer from "./components/Footer";
import MyLibraryPage from "./pages/My-library.page";
import LibraryCatalog from "./pages/library-catalog.page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MyLibraryPage" element={<MyLibraryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/LibraryCatalog" element={<LibraryCatalog />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
