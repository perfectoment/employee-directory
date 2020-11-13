import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";
import employees from "./employees.json"



class App extends Component {
 state ={
  employees:employees

 }


render() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <Searchbar/>
      {this.state.employees.map(employee => (
        <EmployeeCard
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          email={employee.email}
          position={employee.position}
          department={employee.department}
        />
      ))}
      
    </Wrapper>
  );
}
}

export default App;
