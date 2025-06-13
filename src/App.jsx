import Navbar from "./component/Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Shop from "./Pages/Shop.jsx";
import Product from "./Pages/Product.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./component/Footer/Footer.jsx";
import TeaCup from './Pages/TeaCup';
import CoffeeMugs from './Pages/CoffeeMugs';
import MugWithSaucer from './Pages/MugWithSaucer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/tea-cups" element={<TeaCup />} />
          <Route path="/coffee-mugs" element={<CoffeeMugs />} />
          <Route path="/mug-with-saucer" element={<MugWithSaucer/>} />
          <Route path="/product" element={<Product />} />
          <Route path=":productID" element={<product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App
