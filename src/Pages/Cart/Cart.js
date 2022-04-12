import React, { useEffect, useState } from "react";
import Books from "../../Components/Books/Books";
import useAuth from "../../Hooks/useAuth";

const Cart = () => {
  const { books, getCart } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(getCart);
  }, [getCart]);

  const cartComponentHandler = (id) => {
    const book = books.filter((x) => x._id === id);
    return (
      <Books
        key={Math.floor(Math.random() * (99999999 - 10000000)) + 10000000}
        id={book[0]?._id}
        title={book[0]?.title}
        author={book[0]?.author}
        date={book[0]?.date}
        publisher={book[0]?.publisher}
        price={book[0]?.price}
        cover={book[0]?.cover}
      ></Books>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <p className="font-semibold text-2xl text-gray-500 mb-5">• Cart</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 h-[82vh] 2xl:h-[86vh] overflow-y-scroll">
          {cartItems?.map((x) => cartComponentHandler(x.id))}
        </div>
      </div>
      <div className="mt-14">
        <div className="bg-white p-5 rounded-md shadow-sm 2xl:w-3/4">
          <p className="text-xl font-semibold text-gray-500">Cost</p>
          <hr className="my-3" />
          <div className="grid grid-cols-2">
            <p className="font-semibold text-gray-500 my-1">Total Item</p>
            <p className="text-right font-semibold my-1">2</p>
            <p className="font-semibold text-gray-500 my-1">Total Price</p>
            <p className="text-right font-semibold my-1">250$</p>
            <p className="font-semibold text-gray-500 my-1">Discount(20%)</p>
            <p className="text-right font-semibold my-1">-50$</p>
            <hr className="my-3" />
            <hr className="my-3" />
            <p className="font-semibold text-gray-500 my-1">Grand Total</p>
            <p className="text-right font-semibold my-1">200$</p>
          </div>
        </div>
        <div className="mt-5 rounded-md shadow-sm 2xl:w-3/4">
          <button className="bg-blue-100 hover:bg-blue-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold text-xs flex items-center justify-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6b7280"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="7" y1="15" x2="7.01" y2="15" />
              <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
            <span className="font-semibold text-xs ml-2">
              Proceed to Checkout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
