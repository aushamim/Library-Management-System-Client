import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="bg-white p-3 pl-0 h-screen flex">
      <div className="">
        <Navigation></Navigation>
      </div>
      <div className="bg-[#f5f6fb] p-10 rounded-lg w-full">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
