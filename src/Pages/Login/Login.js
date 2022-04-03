import React, { useState } from "react";
import googleIcon from "./../../Media/google.png";

const callLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
};
const callRegister = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(name, email, password);
};

const Login = () => {
  const [isNew, setIsNew] = useState(false);

  return (
    <div className="grid grid-cols-2">
      <div>
        <p className="font-semibold text-3xl mb-10">
          {isNew ? "Please Register" : "Please Login"}
        </p>
        <div className="w-3/4 2xl:w-1/2">
          {isNew ? (
            <div>
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Name"
              />
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email"
              />
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          ) : (
            <div>
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email"
              />
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          )}
          <div className="w-full flex justify-end">
            <button
              className="p-2 ml-3 hover:bg-blue-100 transition ease-in-out duration-500 rounded-full uppercase font-semibold"
              onClick={() => {
                console.log("Google Login");
              }}
            >
              <img src={googleIcon} alt="Google Icon" className="w-7" />
            </button>
            {isNew ? (
              <button
                className="p-3 ml-3 bg-blue-100 hover:bg-blue-200 transition ease-in-out duration-500 rounded-md uppercase font-semibold text-sm"
                onClick={() => {
                  callRegister();
                }}
              >
                Register
              </button>
            ) : (
              <button
                className="p-3 ml-3 bg-blue-100 hover:bg-blue-200 transition ease-in-out duration-500 rounded-md uppercase font-semibold text-sm"
                onClick={() => {
                  callLogin();
                }}
              >
                Login
              </button>
            )}
          </div>

          {isNew ? (
            <p className="text-center mt-10 text-gray-500">
              Have an account?{" "}
              <button
                className="text-blue-700"
                onClick={() => {
                  setIsNew(false);
                }}
              >
                Login here.
              </button>
            </p>
          ) : (
            <p className="text-center mt-10 text-gray-500">
              Don't have an account?{" "}
              <button
                className="text-blue-700"
                onClick={() => {
                  setIsNew(true);
                }}
              >
                Register here.
              </button>
            </p>
          )}
        </div>
      </div>
      <div>
        <lottie-player
          src="https://assets9.lottiefiles.com/private_files/lf30_m6j5igxb.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Login;
