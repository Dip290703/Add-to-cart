import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <main className="pt-8 px-4 sm:px-6 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
      <Navbar cartCount={cartCount} />
      <Products onAddToCart={handleAddToCart} />
    </main>
  );
};

export default App;
