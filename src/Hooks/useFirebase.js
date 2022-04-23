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

  //declare books
  const [books, setBooks] = useState([]);

  // declare auth
  const auth = getAuth();

  // google auth
  const googleProvider = new GoogleAuthProvider();

  // Cart Calculations
  // Read Sales
  const getSales = () => {
    const lsSales = localStorage.getItem("sales");
    return lsSales
      ? lsSales.length === 0
        ? [{ items: 0, price: 0 }]
        : JSON.parse(lsSales)
      : [{ items: 0, price: 0 }];
  };
  // Write Sales
  const storeSales = (items, price) => {
    const lsSales = getSales();
    console.log(lsSales);
    const newLsSales = [
      { items: lsSales[0].items + items, price: lsSales[0].price + price },
    ];
    localStorage.setItem("sales", JSON.stringify(newLsSales));
  };

  // Read Price
  const getPrice = () => {
    const lsPrice = localStorage.getItem("price");
    return lsPrice ? parseInt(JSON.parse(lsPrice)) : 0;
  };
  // Write Price
  const storePrice = (data) => {
    const lsPrice = getPrice();
    localStorage.setItem("price", JSON.stringify(lsPrice + data));
  };
  const removePrice = (data) => {
    const lsPrice = getPrice();
    localStorage.setItem("price", JSON.stringify(lsPrice - data));
  };
  const clearPrice = (data) => {
    localStorage.setItem("price", JSON.stringify(0));
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
  const removeFromCart = (id) => {
    const lsCart = getCart();
    const index = lsCart.findIndex((x) => x.id === id);
    lsCart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(lsCart));
    window.location.reload();
  };
  // Clear cart
  const clearCart = () => {
    localStorage.setItem("cartItems", JSON.stringify([]));
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

    books,
    dbUser,
    getCart,
    storeCart,
    removeFromCart,
    clearCart,
    getPrice,
    storePrice,
    removePrice,
    clearPrice,
    getSales,
    storeSales,
  };
};

export default useFirebase;
