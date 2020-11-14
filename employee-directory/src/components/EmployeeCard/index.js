import React from "react";
import "./style.css";


function EmployeeCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="col-2">
          {props.name}
        </div>
        <div className="col-2">
          {props.position}
        </div>
        <div className="col-2">
          {props.department}
        </div>
        <div className="col-2">
          {props.email}
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
