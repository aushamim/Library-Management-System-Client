import axios from "axios";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import defaultCover from "./../../Media/default-cover.jpg";

const Books = ({ id, title, author, date, publisher, price, cover }) => {
  const pathArray = window.location.pathname.split("/");

  const { storeCart, removeFromCart, storePrice, removePrice } = useAuth();

  return (
    <div className="bg-white rounded-md shadow flex h-max">
      <div className="p-5 w-10/12">
        <div>
          <p className="font-semibold mb-2">{title}</p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Author: </span>
            {author}
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Publish Date: </span>
            {date}
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Publisher: </span>
            {publisher}
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Price: </span>
            {price}
            <span className="font-extrabold text-sm">৳</span>
          </p>
        </div>
        <hr className="my-3" />
        <div
          className={
            pathArray[1] === "cart" || pathArray[1] === "add"
              ? "grid grid-cols-1 gap-5"
              : "grid grid-cols-2 gap-5"
          }
        >
          {pathArray[1] === "" ? (
            // WishList Button
            <button className="bg-orange-100 hover:bg-orange-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width="24"
                height="24"
                viewBox="0 0 27 27"
                strokeWidth="1.5"
                stroke="#6b7280"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                <path d="M20 24h8m-5 -3v6" />
              </svg>
              <span className="font-semibold text-xs ml-2">
                Add to Wishlist
              </span>
            </button>
          ) : pathArray[1] === "add" ? (
            // Add Book Button
            <button
              className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold text-xs flex items-center justify-center"
              onClick={() => {
                const bookData = {
                  title,
                  author,
                  date,
                  publisher,
                  price,
                  cover,
                };
                // console.log(title, author, date, publisher, price, cover);
                // console.log(bookData);
                axios
                  .post(
                    "https://polar-lake-51656.herokuapp.com/books",
                    bookData
                  )
                  .then((res) => {
                    if (res.data.insertedId) {
                      alert("Successfully Added A New Book");
                    }
                  });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart-plus"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                strokeWidth="1.5"
                stroke="#6b7280"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <line x1="3" y1="6" x2="3" y2="19" />
                <line x1="12" y1="6" x2="12" y2="19" />
                <line x1="21" y1="6" x2="21" y2="19" />
                <line x1="27" y1="18" x2="27" y2="22" />
                <line x1="25" y1="20" x2="30" y2="20" />
              </svg>
              <span className="font-semibold text-xs ml-2">Add Book</span>
            </button>
          ) : (
            // Remove Button
            <button
              className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md flex items-center justify-center"
              onClick={() => {
                // pathArray[1] === "cart" &&
                removeFromCart(id);
                removePrice(price);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-trash"
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
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
              <span className="font-semibold text-xs ml-2">Remove</span>
            </button>
          )}
          {pathArray[1] !== "add" && pathArray[1] !== "cart" ? (
            // Add to Cart Button
            <button
              className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold text-xs flex items-center justify-center"
              onClick={() => {
                storeCart({ id: id, price: price });
                storePrice(price);
              }}
            >
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
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                <path d="M15 6h6m-3 -3v6" />
              </svg>
              <span className="font-semibold text-xs ml-2">Add to Cart</span>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src={cover === "defaultCover" ? defaultCover : cover}
          alt={title}
          className="max-h-full rounded-r-md shadow"
        />
      </div>
    </div>
  );
};

export default Books;
