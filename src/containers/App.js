import React, { Component } from 'react';
import './App.css'
import Employees from '../components/Employees/Empolyees';
import axios from 'axios';
import EmployeeDetails from '../components/Employees/EmployeeDetails/EmployeeDetails';



class App extends Component {

  // STATE do przechowywania naszych danych
  state = {
    employees: [],
    selectedEmployee: null
} 


  componentDidMount() {
    axios.get('https://dummyapi.online/api/users', null).then(response => {
      const firstTenEmployees = response.data.slice(0,10);
      this.setState({employees: firstTenEmployees});
    });
  }

  showSelectedEmployeeHandler = (id) => {
    console.log("Employee nr: " + id);
    axios.get('https://dummyapi.online/api/users/' + id).then(
      response => {
        this.setState({selectedEmployee: response.data});
      }
    );
  }
//tworzymy nowego pracownika do dodania
  saveEmployeeHandler = () => {
    const employeeToSave = {
      name: 'Maria',
      salary: 4500,
      age: 25
    }
    axios.post('LINK DO API-REST', employeeToSave).then(response => {
      console.log(response);
    });
  }

  //usuwamy pracownika
  deleteEmployeeHandler = () => {
    const id = 2;
    axios.delete('LINK DO API-REST', + id).then(
      response => {
        console.log(response);
      }
    );
  }

  render(){
    let selectedEmployee = null;
    
    if(this.state.selectedEmployee !== null){
      selectedEmployee = <EmployeeDetails 
      name={this.state.selectedEmployee.name}
      username={this.state.selectedEmployee.username}
      email={this.state.selectedEmployee.email}
       />
    }

    return (
     
      
      <div className='App'>
      {selectedEmployee}
        <h1>Employees</h1>
        <Employees 
        employees={this.state.employees} 
        showSelectedEmployee={this.showSelectedEmployeeHandler} />
        <button onCanPlay={this.saveEmployeeHandler} className='UpdateButton'>Save Employee</button>
        <button onCanPlay={this.deleteEmployeeHandler} className='UpdateButton'>Delete Employee</button>
      </div>
      
     );
  }
}

export default App;