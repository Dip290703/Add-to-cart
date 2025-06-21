import React from "react";
import { products } from "../data/Product.js"; // adjust path if needed
import AddToCartButton from "./AddToCartButton";

const Products = ({ onAddToCart }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-blue-600 font-semibold mt-2">₹{product.price}</p>
            <AddToCartButton onAdd={() => onAddToCart(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
