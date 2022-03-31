import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="p-5 pt-0">
      <Link to="/">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_n2yhd0lo.json"
          background="transparent"
          speed="1"
          style={{ width: "60px", height: "60px" }}
          loop
          autoplay
        ></lottie-player>
      </Link>
    </div>
  );
};

export default Navigation;
