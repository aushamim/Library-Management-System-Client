import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import googleIcon from "./../../Media/google.png";

const Login = () => {
  // set the login and signUp state
  const [isNew, setIsNew] = useState(false);

  const {
    user,
    authError,
    loginUser,
    registerUser,
    isLoading,
    signInWithGoogle,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // get login info
  const callLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    loginUser(email, password, location, navigate);
  };

  // get register user info
  const callRegister = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    registerUser(email, password, name, navigate);
    console.log(user);
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <p className="font-semibold text-3xl mb-10">
          {isNew ? "Please Register" : "Please Login"}
        </p>
        <div className="w-3/4 2xl:w-1/2">
          {isNew ? (
            //sign up area

            <div>
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
                placeholder="Name"
              />

              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
              />
            </div>
          ) : (
            //login area

            <div>
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input
                className="w-full p-3 my-3 rounded-md outline-blue-300"
                type="password"
                name="password"
                required
                id="password"
                placeholder="Password"
              />
            </div>
          )}
          <>
            {/* {isLoading && (
              <div className="flex justify-center items-center space-x-2">
                <div
                  className="
    spinner-border
    animate-spin
    inline-block
    w-8
    h-8
    border-4
    rounded-full
    text-purple-500
  "
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )} */}
            {user?.email && (
              <div
                className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700"
                role="alert"
              >
                User Created successfully
              </div>
            )}
          </>
          <>
            {authError && (
              <div
                className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                role="alert"
              >
                {authError}
              </div>
            )}
          </>
          <div className="w-full flex justify-end">
            {/* google login btn  */}

            <button
              className="p-2 ml-3 hover:bg-blue-100 transition ease-in-out duration-500 rounded-full uppercase font-semibold"
              onClick={handleGoogleSignIn}
            >
              <img src={googleIcon} alt="Google Icon" className="w-7" />
            </button>
            {isNew ? (
              // register btn

              <button
                className="p-3 ml-3 bg-blue-100 hover:bg-blue-200 transition ease-in-out duration-500 rounded-md uppercase font-semibold text-sm"
                onClick={() => {
                  callRegister();
                }}
              >
                Register
              </button>
            ) : (
              //login btn

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
