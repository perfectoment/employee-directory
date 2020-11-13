import React from "react";
import "./style.css";


function Header(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          Picture
        </div>
        <div className="col-2">
          Name
        </div>
        <div className="col-2">
          Position
        </div>
        <div className="col-2">
          Department
        </div>
        <div className="col-2">
          Email Address
        </div>
      </div>
    </div>
  );
}

export default Header;
