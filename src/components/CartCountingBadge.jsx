import React from 'react';
import { BsCart2 } from 'react-icons/bs';

const CartCountingBadge = ({ count }) => {
  return (
    <div className="relative cursor-pointer">
      <BsCart2 size={25} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartCountingBadge;
