import React from "react";
import avatar from "./../../Media/default-avatar.png";
import reading from "./../../Media/read.png";
import wish from "./../../Media/stars.png";
import coins from "./../../Media/coins.png";
import finished from "./../../Media/bookmark.png";
import Books from "../../Components/Books/Books";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 xl:gap-10 mb-5 h-[90vh] 2xl:h-[93vh] overflow-y-scroll">
      <div>
        <div className="bg-white rounded-md p-5 relative">
          <div className="flex justify-center">
            <div className="flex justify-center absolute">
              <div className="border-2 border-blue-500 rounded-full w-32">
                <div className="rounded-full p-1">
                  <img src={avatar} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 pt-20 mt-16 bg-blue-50 rounded-md text-center font-semibold italic text-gray-500">
            If you don't like to read, you haven't found the right book
          </div>
        </div>
        <div className="bg-white rounded-md p-5 my-5">
          <span className="font-semibold text-2xl">Shamim</span>
          <hr className="my-3" />
          <div className="grid grid-cols-3">
            <p className="font-semibold text-gray-500 my-1">Position</p>
            <p className="col-span-2 text-right font-semibold my-1">User</p>
            <p className="font-semibold text-gray-500 my-1">Join Date</p>
            <p className="col-span-2 text-right font-semibold my-1">
              06 Apr, 2022
            </p>
            <p className="font-semibold text-gray-500 my-1">Phone</p>
            <p className="col-span-2 text-right font-semibold my-1">
              01234567890
            </p>
            <p className="font-semibold text-gray-500 my-1">Email</p>
            <p className="col-span-2 text-right font-semibold my-1">
              shamim@gmail.com
            </p>
            <p className="font-semibold text-gray-500 my-1">Following</p>
            <p className="col-span-2 text-right font-semibold my-1">0</p>
            <p className="font-semibold text-gray-500 my-1">Followers</p>
            <p className="col-span-2 text-right font-semibold my-1">0</p>
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
              <p className="font-bold">10</p>
              <p className="font-semibold text-sm mt-1">Planning</p>
            </div>
          </div>
          <div className="bg-blue-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={finished} alt="Finished reading" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-blue-600">
              <p className="font-bold">10</p>
              <p className="font-semibold text-sm mt-1">Finished</p>
            </div>
          </div>
          <div className="bg-teal-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={reading} alt="Wishlist" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-teal-600">
              <p className="font-bold">10</p>
              <p className="font-semibold text-sm mt-1">Reading</p>
            </div>
          </div>
          <div className="bg-violet-200 p-5 rounded-md grid grid-cols-3 items-center">
            <div>
              <img src={coins} alt="Bought Books" className="w-1/2" />
            </div>
            <div className="col-span-2 text-center uppercase text-2xl text-violet-600">
              <p className="font-bold">10</p>
              <p className="font-semibold text-sm mt-1">Bought</p>
            </div>
          </div>
        </div>

        <div className="mt-5 xl:mt-10">
          {/* Planning */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">
              • Plannig to Read
            </p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
            </div>
          </div>

          {/* Finished */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">• Finished</p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
            </div>
          </div>

          {/* Reading */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">• Reading</p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
            </div>
          </div>

          {/* Bought */}
          <div className="mt-5">
            <p className="font-semibold text-2xl text-gray-500">
              • Recently Bought
            </p>
            <div className="horizontal-scroll-fix flex overflow-x-scroll mt-5">
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
              <div className="mr-5">
                <Books></Books>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
