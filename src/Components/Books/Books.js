import React from "react";

const Books = () => {
  return (
    <div className="bg-white rounded-md shadow-sm flex h-max">
      <div className="p-5 w-10/12">
        <p className="font-semibold mb-2">
          Database Management System (DBMS)A Practical Approach
        </p>
        <p className="text-xs mb-1 font-semibold">
          <span className="text-gray-400">Author: </span>Rajiv Chopra
        </p>
        <p className="text-xs mb-1 font-semibold">
          <span className="text-gray-400">Publish Date: </span>2010-01-01
        </p>
        <p className="text-xs mb-1 font-semibold">
          <span className="text-gray-400">Publisher: </span>S. Chand Publishing
        </p>
      </div>
      <div className="flex justify-end">
        <img
          src="http://books.google.com/books/content?id=FTUJNA4lLdAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt=""
          className="max-h-full rounded-r-md shadow-sm"
        />
      </div>
    </div>
  );
};

export default Books;
