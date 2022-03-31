import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="p-5 text-center navigation">
      <Link to="/">
        <div className="mb-12">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_n2yhd0lo.json"
            background="transparent"
            speed="1"
            style={{ width: "60px", height: "60px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </Link>

      {/* Home */}
      <Link to="/">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <span className="nav-tooltip">Home</span>
        </div>
      </Link>

      {/* Profile */}
      <Link to="/user/">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <span className="nav-tooltip">Profile</span>
        </div>
      </Link>

      {/* Forum */}
      <Link to="/users">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-messages"
            width="32"
            height="32"
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
          <span className="nav-tooltip">Forum</span>
        </div>
      </Link>

      {/* Add Book */}
      <Link to="/add">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-book"
            width="32"
            height="32"
            viewBox="0 0 30 30"
            strokeWidth="1.5"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <line x1="3" y1="6" x2="3" y2="19" />
            <line x1="12" y1="6" x2="12" y2="19" />
            <line x1="21" y1="6" x2="21" y2="19" />
            <line x1="27" y1="18" x2="27" y2="22" />
            <line x1="25" y1="20" x2="30" y2="20" />
          </svg>
          <span className="nav-tooltip">Add New Book</span>
        </div>
      </Link>

      {/* Admin Panel */}
      <Link to="/add">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shield"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          </svg>
          <span className="nav-tooltip">Admin Panel</span>
        </div>
      </Link>

      {/* Log-in */}
      <Link to="/add">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-login"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M20 12h-13l3 -3m0 6l-3 -3" />
          </svg>
          <span className="nav-tooltip">Log In</span>
        </div>
      </Link>

      {/* Logout */}
      <Link to="/add">
        <div className="flex flex-col justify-center items-center my-5 p-2 group relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-power"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#6b7280"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 6a7.75 7.75 0 1 0 10 0" />
            <line x1="12" y1="4" x2="12" y2="12" />
          </svg>
          <span className="nav-tooltip">Log Out</span>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
