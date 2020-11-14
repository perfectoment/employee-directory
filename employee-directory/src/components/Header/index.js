import React from "react";
import "./style.css";


function Header(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          Picture
        </div>
        <div className="col-2 name" onClick={(event) => props.handleClickname(event)}>
         <p className="name">Name^</p>
        </div>
        <div className="col-2">
          Position
        </div>
        <div className="col-2 name" onClick={(event) => props.handleClickdepartment(event)}>
          Department^
        </div>
        <div className="col-2">
          Email Address
        </div>
      </div>
    </div>
  );
}

export default Header;
