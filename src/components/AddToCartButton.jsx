import React from "react";

const AddToCartButton = ({ onAdd }) => {
  return (
    <button
      onClick={onAdd}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
