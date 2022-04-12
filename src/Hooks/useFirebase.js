import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/FirebaseInit";

// call firebase config file
firebaseAuthentication();

const useFirebase = () => {
  // declare user state
  const [user, setUser] = useState({});

  // declare DBuser state
  const [dbUser, setDbUser] = useState([]);
  // user state change state
  const [isLoading, setIsLoading] = useState(true);
  // error state
  const [authError, setAuthError] = useState("");
  //declare admin
  const [admin, setAdmin] = useState("false");

  //declare books
  const [books, setBooks] = useState([]);

  // declare auth
  const auth = getAuth();

  // google auth
  const googleProvider = new GoogleAuthProvider();

  // Cart Calculations
  // const [totalPrice, setTotalPrice] = useState(0);

  // Read Cart
  const getPrice = () => {
    const lsPrice = localStorage.getItem("price");
    return lsPrice ? parseInt(JSON.parse(lsPrice)) : 0;
  };
  // Write Cart
  const storePrice = (data) => {
    const lsPrice = getPrice();
    localStorage.setItem("price", JSON.stringify(lsPrice + data));
  };

  // Refresh Handler
  const [refreshState, setRefreshState] = useState(true);

  const refresh = () => {
    refreshState ? setRefreshState(false) : setRefreshState(true);
  };

  // Read Cart
  const getCart = () => {
    const lsCart = localStorage.getItem("cartItems");
    return lsCart ? JSON.parse(lsCart) : [];
  };
  // Write Cart
  const storeCart = (data) => {
    const lsCart = getCart();
    localStorage.setItem("cartItems", JSON.stringify([...lsCart, data]));
  };
  // Remove from cart
  const removeFromCart = () => {};
  // Clear cart
  const clearCart = () => {
    localStorage.clear();
    window.location.reload();
  };

  // register new user
  const registerUser = (
    email,
    password,
    name,
    navigate,
    joinDate,
    role,
    following,
    followers,
    planning,
    finished,
    reading,
    bought,
    userImg
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(
          email,
          name,
          joinDate,
          role,
          following,
          followers,
          planning,
          finished,
          reading,
          bought,
          userImg,
          "POST"
        );

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // login user
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // google sign in
  const signInWithGoogle = (
    location,
    navigate,
    joinDate,
    role,
    following,
    followers,
    planning,
    finished,
    reading,
    bought
  ) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // save user to the database
        saveUser(
          user.email,
          user.displayName,
          joinDate,
          role,
          following,
          followers,
          planning,
          finished,
          reading,
          bought,
          user.photoURL,
          "PUT"
        );
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  // logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  // saved user function
  const saveUser = (
    email,
    displayName,
    joinDate,
    role,
    following,
    followers,
    planning,
    finished,
    reading,
    bought,
    userImg,
    method
  ) => {
    const user = {
      email,
      displayName,
      joinDate,
      role,
      following,
      followers,
      planning,
      finished,
      reading,
      bought,
      userImg,
    };
    fetch("https://polar-lake-51656.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // // admin data load
  // useEffect(() => {
  //   fetch(`https://polar-lake-51656.herokuapp.com/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setAdmin(data.admin));
  // }, [user.email]);

  // books data load
  useEffect(() => {
    fetch("https://polar-lake-51656.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // users data load
  useEffect(() => {
    fetch("https://polar-lake-51656.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setDbUser(data));
  }, []);

  return {
    registerUser,
    authError,
    loginUser,
    signInWithGoogle,
    logout,
    user,
    isLoading,
    admin,
    books,
    dbUser,
    refreshState,
    refresh,
    getCart,
    storeCart,
    removeFromCart,
    clearCart,
    getPrice,
    storePrice,
  };
};

export default useFirebase;
