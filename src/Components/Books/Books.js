import React from "react";

const Books = () => {
  return (
    <div className="bg-white rounded-md shadow flex h-max">
      <div className="p-5 w-10/12">
        <div>
          <p className="font-semibold mb-2">
            Database Management System (DBMS)A Practical Approach
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Author: </span>Rajiv Chopra
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Publish Date: </span>2010-01-01
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Publisher: </span>S. Chand
            Publishing
          </p>
          <p className="text-xs mb-1 font-semibold">
            <span className="text-gray-400">Price: </span>100$
          </p>
        </div>
        <hr className="my-3" />
        <div className="grid grid-cols-2 gap-5">
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
            <span className="font-semibold text-xs ml-2">Add to Wishlist</span>
          </button>
          <button className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold text-xs flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-shopping-cart-plus"
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
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src="http://books.google.com/books/content?id=FTUJNA4lLdAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt=""
          className="max-h-full rounded-r-md shadow"
        />
      </div>
    </div>
  );
};

export default Books;
