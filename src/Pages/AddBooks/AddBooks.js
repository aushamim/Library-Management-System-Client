import React, { useState } from "react";
import Books from "../../Components/Books/Books";

const AddBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = (book) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.items));
  };

  return (
    <div>
      <div className="flex mx-[20%]">
        <input
          id="add-book"
          className="w-full p-3 rounded-md font-semibold outline-blue-300 text-gray-500"
          type="text"
          placeholder="Search to add a book"
          autoComplete="off"
        />
        <button
          className="p-3 group"
          onClick={() => {
            getBooks(document.getElementById("add-book").value);
            document.getElementById("add-book").placeholder =
              document.getElementById("add-book").value;
            document.getElementById("add-book").value = "";
          }}
        >
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

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 h-[87vh] lg:h-[78vh] 2xl:h-[83vh] overflow-y-scroll">
        {books.map((x) => (
          <Books
            key={x.id}
            title={
              x.volumeInfo.title === undefined ? "Title" : x.volumeInfo.title
            }
            author={
              x.volumeInfo.authors === undefined
                ? "Author"
                : x.volumeInfo.authors[0]
            }
            date={
              x.volumeInfo.publishedDate === undefined
                ? "Date"
                : x.volumeInfo.publishedDate
            }
            publisher={
              x.volumeInfo.publisher === undefined
                ? "Publisher"
                : x.volumeInfo.publisher
            }
            price={
              x.volumeInfo.pageCount === undefined
                ? 100
                : x.volumeInfo.pageCount
            }
            cover={
              x.volumeInfo.imageLinks === undefined
                ? "defaultCover"
                : x.volumeInfo.imageLinks.thumbnail
            }
          ></Books>
        ))}
      </div>
    </div>
  );
};

export default AddBooks;
