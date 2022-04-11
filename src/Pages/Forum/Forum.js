import React from "react";
import { Link } from "react-router-dom";
import Thread from "../../Components/Thread/Thread";
import useAuth from "../../Hooks/useAuth";
import avatar from "./../../Media/default-avatar.png";

const Forum = () => {
  const { dbUser, user } = useAuth();
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-2 overflow-y-scroll h-[90vh]">
        <Thread></Thread>
      </div>

      <div className="">
        <div className="bg-white rounded-md h-max shadow-sm">
          {user.email ? (
            <textarea
              name="post"
              id="post"
              cols=""
              rows="5"
              className="w-full p-3 rounded-md outline-none"
              placeholder="Write Something"
            ></textarea>
          ) : (
            <p className="text-2xl font-semibold text-gray-500 text-center py-16">
              Please{" "}
              <Link to="/login" className="text-blue-500">
                Log In
              </Link>{" "}
              to post.
            </p>
          )}
        </div>
        {user.email && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            {/* Clear */}
            <button
              className="bg-red-100 hover:bg-red-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md flex items-center justify-center"
              onClick={() => {
                document.getElementById("post").value = "";
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
                Clear
              </span>
            </button>
            {/* Post */}
            <button
              className="bg-emerald-100 hover:bg-emerald-300 transition ease-in-out duration-500 shadow-sm p-2 rounded-md font-semibold text-xs flex items-center justify-center"
              onClick={() => {
                console.log(document.getElementById("post").value);
                document.getElementById("post").value = "";
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
                Post
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="mx-auto">
        <p className="font-semibold text-xl text-gray-500 mb-5">
          • Recent Users
        </p>
        <div className="max-h-[90vh] overflow-y-scroll">
          {dbUser?.map((user) => (
            <Link key={user._id} to={`/user/${user._id}`}>
              <div className="bg-white shadow-sm rounded-full flex items-center w-max pr-5 mb-3">
                <div className="w-12 border-4 border-[#f5f6fb] rounded-full mr-3">
                  <img
                    src={
                      user?.userImg === "defaultAvatar" ? avatar : user?.userImg
                    }
                    alt="avatar"
                    className="w-full rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-500">
                  {user.displayName}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
