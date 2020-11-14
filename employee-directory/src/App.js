import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header"
import Title from "./components/Title";
import employees from "./employees.json"





class App extends Component {
 state ={
  employees:employees,
  search:"",
 }


handleSubmit = event => {
  const arraySearch = this.state.employees;
  const searchValue = event.target.value.toUpperCase()
  const finalArray = arraySearch.filter(function(item){
    const uppercase = item.name.toUpperCase()
    return uppercase.includes(searchValue)
  })
  this.setState({
    employees:finalArray
  });
}  



 handleClickname = event =>{
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
this.setState({employees:alpha})
 }

 handleClickdepartment = event =>{
  const namesArray = this.state.employees;
  const alpha = namesArray.sort(function(a,b){
    var departmentA = a.department.toUpperCase(); 
    var departmentB = b.department.toUpperCase(); 

  if (departmentA < departmentB) {
    return -1; 
  }
  if (departmentA > departmentB) {
    return 1; 
  }
  return 0;  
})
this.setState({employees:alpha})
 }





render() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <Searchbar
      handleSubmit={this.handleSubmit}
      />
      <Header
      handleClickname={this.handleClickname}
      handleClickdepartment={this.handleClickdepartment}
      />
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
