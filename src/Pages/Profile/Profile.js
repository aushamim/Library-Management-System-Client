import React from "react";
import avatar from "./../../Media/default-avatar.png";
import reading from "./../../Media/read.png";
import wish from "./../../Media/stars.png";
import coins from "./../../Media/coins.png";
import finished from "./../../Media/bookmark.png";
import Books from "../../Components/Books/Books";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { dbUser, books } = useAuth();
  const singleUser = dbUser.filter((x) => x._id === id);

  const boughtComponentHandler = (id) => {
    const book = books.filter((x) => x._id === id);
    return (
      <div
        className="mr-5"
        key={Math.floor(Math.random() * (99999999 - 10000000)) + 10000000}
      >
        <Books
          key={Math.floor(Math.random() * (99999999 - 10000000)) + 10000000}
          id={book[0]?._id}
          title={book[0]?.title}
          author={book[0]?.author}
          date={book[0]?.date}
          publisher={book[0]?.publisher}
          price={book[0]?.price}
          cover={book[0]?.cover}
        ></Books>
      </div>
    );
  };

  // convert date
  const handleDate = (time) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day} ${months[month]}, ${year}`;
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 xl:gap-10 mb-5 h-[90vh] 2xl:h-[93vh] overflow-y-scroll">
      <div>
        <div className="bg-white rounded-md p-5 relative">
          <div className="flex justify-center">
            <div className="flex justify-center absolute">
              <div className="border-2 border-blue-500 rounded-full w-32">
                <div className="rounded-full p-1">
                  <img
                    src={
                      singleUser[0]?.userImg === "defaultAvatar"
                        ? avatar
                        : singleUser[0]?.userImg
                    }
                    referrerPolicy="no-referrer"
                    alt={singleUser[0]?.displayName}
                    className="w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 pt-20 mt-16 bg-blue-50 rounded-md text-center font-semibold italic text-gray-500">
            If you don't like to read, you haven't found the right book
          </div>
        </div>
        <div className="bg-white rounded-md p-5 my-5">
          <div className="grid grid-cols-5 items-center">
            <p className="font-semibold text-2xl col-span-4">
              {singleUser[0]?.displayName}
            </p>
            <div className="flex justify-end">
              <button
                className="p-2 hover:bg-blue-100 transition ease-in-out duration-500 rounded-full group"
                onClick={() => {
                  console.log("Add Friend");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-plus group-hover:stroke-blue-500"
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
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 11h6m-3 -3v6" />
                </svg>
              </button>
            </div>
          </div>
          <hr className="my-3" />
          <div className="grid grid-cols-3">
            <p className="font-semibold text-gray-500 my-1">Position</p>
            <p className="col-span-2 text-right font-semibold my-1">
              {singleUser[0]?.role}
            </p>
            <p className="font-semibold text-gray-500 my-1">Join Date</p>
            <p className="col-span-2 text-right font-semibold my-1">
              {handleDate(singleUser[0]?.joinDate)}
            </p>
            <p className="font-semibold text-gray-500 my-1">Phone</p>
            <p className="col-span-2 text-right font-semibold my-1">
              01234567890
            </p>
            <p className="font-semibold text-gray-500 my-1">Email</p>
            <p className="col-span-2 text-right font-semibold my-1">
              {singleUser[0]?.email}
            </p>
            <p className="font-semibold text-gray-500 my-1">Following</p>
            <p className="col-span-2 text-right font-semibold my-1">
              {singleUser[0]?.following.length}
            </p>
            <p className="font-semibold text-gray-500 my-1">Followers</p>
            <p className="col-span-2 text-right font-semibold my-1">
              {" "}
              {singleUser[0]?.followers.length}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          <div className="bg-orange-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={wish} alt="Wishlist" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-orange-600">
              <p className="font-bold">{singleUser[0]?.planning?.length}</p>
              <p className="font-semibold text-sm mt-1">Planning</p>
            </div>
          </div>
          <div className="bg-blue-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={finished} alt="Finished reading" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-blue-600">
              <p className="font-bold">{singleUser[0]?.bought?.length}</p>
              <p className="font-semibold text-sm mt-1">Finished</p>
            </div>
          </div>
          <div className="bg-teal-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={reading} alt="Wishlist" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-teal-600">
              <p className="font-bold">{singleUser[0]?.planning.length}</p>
              <p className="font-semibold text-sm mt-1">Reading</p>
            </div>
          </div>
          <div className="bg-violet-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={coins} alt="Bought Books" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-violet-600">
              <p className="font-bold">{singleUser[0]?.bought?.length}</p>
              <p className="font-semibold text-sm mt-1">Bought</p>
            </div>
          </div>
        </div>

        <div className="mt-5 xl:mt-10">
          {/* Planning */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">
              ??? Plannig to Read
            </p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              {singleUser[0]?.planning.map((book) => (
                <div className="mr-5" key={book?._id}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Finished */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">??? Finished</p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              {singleUser[0]?.bought.map((book) =>
                boughtComponentHandler(book?.id)
              )}
            </div>
          </div>

          {/* Reading */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">??? Reading</p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              {singleUser[0]?.planning.map((book) => (
                <div className="mr-5" key={book?._id}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Bought */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">
              ??? Recently Bought
            </p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              {singleUser[0]?.bought.map((book) =>
                boughtComponentHandler(book?.id)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
