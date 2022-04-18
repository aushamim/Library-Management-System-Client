import React, { useState } from "react";

const ReplyField = () => {
  const [replyButtonsVisibility, setReplyButtonsVisibility] = useState(false);
  const toggleReplyButtonsVisibility = () => {
    if (document.getElementById("reply").value === "") {
      setReplyButtonsVisibility(false);
    }
  };

  return (
    <div className="">
      <div className="bg-white shadow-sm rounded-md mb-2 text-sm">
        <textarea
          onFocus={() => {
            setReplyButtonsVisibility(true);
          }}
          onBlur={() => {
            toggleReplyButtonsVisibility();
          }}
          name="reply"
          id="reply"
          cols=""
          rows="1"
          className="w-full p-3 rounded-md outline-none"
          placeholder="Write a Reply"
        ></textarea>
      </div>

      {replyButtonsVisibility ? (
        <div className="grid grid-cols-2 gap-3 mt-3">
          {/* Clear */}
          <button
            className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md flex items-center justify-center"
            onClick={() => {
              setReplyButtonsVisibility(false);
              document.getElementById("reply").value = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-red-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6b7280"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="font-semibold text-xs ml-2 hidden 2xl:block">
              Cancel
            </span>
          </button>
          {/* Post */}
          <button
            className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold text-xs flex items-center justify-center"
            onClick={() => {
              console.log(document.getElementById("reply").value);
              setReplyButtonsVisibility(false);
              document.getElementById("reply").value = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-emerald-500"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6b7280"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            <span className="font-semibold text-xs ml-2 hidden 2xl:block">
              Reply
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ReplyField;
