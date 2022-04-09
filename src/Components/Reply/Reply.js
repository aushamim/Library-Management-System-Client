import React from "react";
import { Link } from "react-router-dom";

const Reply = () => {
  return (
    <div className="bg-white shadow-sm rounded-md mb-2 p-2 text-sm">
      <div className="flex items-center">
        <div className="w-full">
          <Link to="/user" className="text-lg font-semibold text-gray-500">
            User
          </Link>{" "}
          -{" "}
          <span className="font-semibold text-gray-400 text-xs">
            10/05/2000
          </span>
        </div>
        <div className="flex justify-center items-center group">
          <button className="p-1 bg-red-50 group-hover:bg-red-100 rounded-full transition ease-in-out duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash stroke-red-400 group-hover:stroke-red-600 transition ease-in-out duration-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
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
          </button>
        </div>
      </div>
      <hr className="my-1" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt
        voluptatibus voluptatum cumque temporibus officia odit nostrum facere
        aliquid error!
      </p>
    </div>
  );
};

export default Reply;
