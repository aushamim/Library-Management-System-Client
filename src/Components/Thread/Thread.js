import React from "react";
import avatar from "./../../Media/default-avatar.png";

const Thread = () => {
  return (
    <div className="mb-10">
      <div className="col-span-3 bg-white shadow-sm rounded-l-3xl rounded-r-md flex">
        <div className="w-16 border-4 border-[#f5f6fb] rounded-full mr-3">
          <img src={avatar} alt="avatar" className="w-full" />
        </div>
        <div className="w-full">
          <p className="text-xl font-semibold text-gray-500">Shamim</p>
          <p className="text-xs font-semibold text-gray-400">01/04/2022</p>
        </div>
        <div className="flex justify-center items-center mr-3 group">
          <button className="p-2 bg-red-50 group-hover:bg-red-100 rounded-full transition ease-in-out duration-500">
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
      <div className="bg-white shadow-sm rounded-md my-2">
        <div className="p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quia
          non repellat quidem dignissimos aspernatur illo aperiam esse, fugit
          expedita. Est harum fuga incidunt nam tempore? Nisi, quisquam
          blanditiis! Consequuntur illo quasi, aliquam rem ex deserunt esse
          earum laboriosam ullam quia ad perspiciatis voluptatum sit eligendi,
          dolorem vitae magni praesentium.
        </div>
        <div className="flex justify-end p-1">
          <button className="flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-blue-500 fill-blue-200"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6b7280"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
            <p className="ml-1 text-xs font-semibold text-blue-500">0</p>
          </button>
          <button className="flex items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-red-500 fill-red-200"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6b7280"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <p className="ml-1 text-xs font-semibold text-red-500">0</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thread;
