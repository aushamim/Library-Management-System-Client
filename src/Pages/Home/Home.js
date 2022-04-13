import React from "react";
import Books from "../../Components/Books/Books";
import useAuth from "../../Hooks/useAuth";
import avatar from "./../../Media/default-avatar.png";

const Home = () => {
  const { user, books } = useAuth();

  return (
    <div>
      <div className="grid grid-cols-8">
        <div className="mb-14 col-span-7">
          <p className="text-4xl">
            Hi
            {user.email ? (
              <>
                ,{" "}
                <span className="font-semibold text-gray-700">
                  {user.displayName}
                </span>
              </>
            ) : (
              ""
            )}{" "}
            👋
          </p>
          <p className="text-4xl mt-2">
            Welcome to{" "}
            <span className="font-semibold text-gray-700">The Library</span>
          </p>
        </div>

        {user.email ? (
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
                {user.email ? (
                  <img
                    src={user.photoURL === null ? avatar : user.photoURL}
                    alt="avatar"
                    className="w-full rounded-full"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <img src={avatar} alt="avatar" className="w-full" />
                )}
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
        ) : (
          ""
        )}
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
          {books.length === 0 ? (
            <div className="flex items-center justify-center col-span-8">
              <svg
                role="status"
                className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            books.map((book) => (
              <Books
                key={book?._id}
                id={book?._id}
                title={book?.title}
                author={book?.author}
                date={book?.date}
                publisher={book?.publisher}
                price={book?.price}
                cover={book?.cover}
              ></Books>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
