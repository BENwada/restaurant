import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="">
      {/* PRODUCTS CONTAINER */}
      <div className="">
        {/* SINGLE ITEM */}
        <div className="">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1>sicilian</h1>
            <span>Large</span>
          </div>
          <h2>$79.90</h2>
          <span>X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="">
        <div className="">
          <span>Subtotal(3 items)</span>
          <span>$81.70</span>
        </div>
        <hr className="" />
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
