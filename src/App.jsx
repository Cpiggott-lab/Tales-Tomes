import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage.page";
import LibraryPage from "./pages/My-library.page";
import CartPage from "./pages/Cart.page";
import WishlistPage from "./pages/Wish-List.page";
import ProductDetailsPage from "./pages/Product-details.page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
