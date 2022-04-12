import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reply from "../Reply/Reply";
import avatar from "./../../Media/default-avatar.png";

const Thread = ({ userImg, displayName, time, postData, replies }) => {
  // con data
  const handleDate = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${
      hours > 12 ? hours - 12 : hours
    }:${minutes}${ampm} ${day}/${month}/${year}`;
  };

  const [reply, setReply] = useState(false);

  return (
    <div className="mb-10">
      <div className="bg-white shadow-sm rounded-l-3xl rounded-r-md flex">
        <div className="w-16 border-4 border-[#f5f6fb] rounded-full mr-3">
          <img
            src={userImg === "defaultAvatar" ? avatar : userImg}
            alt="avatar"
            className="w-full rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full">
          <Link to="/user/:id">
            <p className="text-xl font-semibold text-gray-500">{displayName}</p>
          </Link>
          <p className="text-xs font-semibold text-gray-400">
            {handleDate(time)}
          </p>
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
        <div className="p-3">{postData}</div>
        <div className="flex justify-end p-1">
          {/* Reply */}
          <button
            className="flex items-center mr-2"
            onClick={() => {
              reply === false ? setReply(true) : setReply(false);
            }}
          >
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
          {/* React */}
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
      {reply ? (
        <div className="mt-2 mx-3">
          <Reply></Reply>
          <p className="text-center">No reply yet ... U_U</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Thread;
