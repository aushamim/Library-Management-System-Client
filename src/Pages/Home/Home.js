import React from "react";
import avatar from "./../../Media/default-avatar.png";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-8">
        <div className="mb-14 col-span-7">
          <p className="text-4xl font-semibold text-gray-700">Hi,</p>
          <p className="text-4xl">Shamim 👋</p>
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

      <div>something...</div>
    </div>
  );
};

export default Home;
