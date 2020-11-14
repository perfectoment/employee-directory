import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header"
import Title from "./components/Title";
import employees from "./employees.json"





class App extends Component {
 state ={
  employees:employees

 }


handleSubmit = event => {
  const arraySearch = this.state.employees;
  const searchValue = event.target.value;
  const finalArray = arraySearch.filter(function(name){
    console.log(name.name)
    return name.name.includes(searchValue)
  
  
  })
  this.setState({employees:finalArray})
}  



 handleClick = event =>{
  const namesArray = this.state.employees;
  const alpha = namesArray.sort(function(a,b){
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 

  if (nameA < nameB) {
    return -1; 
  }
  if (nameA > nameB) {
    return 1; 
  }
  return 0;  
})
console.log(alpha)
 }


render() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <Searchbar
      handleSubmit={this.handleSubmit}
      />
      <Header/>
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
