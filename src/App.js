import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Pages/Profile/Profile";
import Forum from "./Pages/Forum/Forum";
import AuthProvider from "./ContextApi/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/ProtectedRoute/PrivateRoute";
import AddBooks from "./Pages/AddBooks/AddBooks";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <AuthProvider>
      <div className="bg-white p-3 pl-0 h-screen flex">
        <div className="">
          <Navigation></Navigation>
        </div>
        <div className="bg-[#f5f6fb] p-10 rounded-lg w-full">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart></Cart>
                </PrivateRoute>
              }
            />
            <Route
              path="/user/:id"
              exact={true}
              element={
                <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
              }
            />

            <Route path="/forum" element={<Forum></Forum>} />
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddBooks></AddBooks>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin></Admin>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
