import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function Searchbar(props){
  return (
      <form className="form-group">
        <input className="searchbar" placeholder="Please Enter a Name"></input>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
        
      </form>
        
        
       
  )}

export default Searchbar;
