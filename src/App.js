import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="bg-white p-3 pl-0 h-screen flex">
      <div className="">
        <Navigation></Navigation>
      </div>
      <div className="bg-[#f5f6fb] p-10 rounded-lg w-full">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
