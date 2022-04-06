import React from "react";
import Books from "../../Components/Books/Books";
import avatar from "./../../Media/default-avatar.png";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-8">
        <div className="mb-14 col-span-7">
          <p className="text-4xl">
            Hi, <span className="font-semibold text-gray-700">Shamim</span> 👋
          </p>
          <p className="text-4xl mt-2">
            Welcome to{" "}
            <span className="font-semibold text-gray-700">The Library</span>
          </p>
        </div>

        <div>
          <div className="flex justify-end">
            <div className="flex items-center mr-5">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bell"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#6b7280"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </button>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center">
              <img src={avatar} alt="avatar" className="w-full" />
            </div>
            <div className="flex items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-dots-vertical"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#6b7280"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" />
                  <circle cx="12" cy="5" r="1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4">
          <div className="col-span-3 flex items-center">
            <p className="font-semibold text-2xl text-gray-500">• All Books</p>
          </div>
          <div className="flex">
            <input
              className="w-full p-3 rounded-md font-semibold outline-blue-300 text-gray-500"
              type="text"
              placeholder="Search for a book"
              autoComplete="off"
            />
            <button className="p-3 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search fill-transparent group-hover:fill-blue-200 group-hover:stroke-blue-800"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6b7280"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 h-[75vh] lg:h-[59vh] 2xl:h-[69vh] overflow-y-scroll">
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
          <Books></Books>
        </div>
      </div>
    </div>
  );
};

export default Home;
