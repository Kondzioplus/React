import React, { Component } from 'react';
import './App.css'
import Employees from '../components/Employees/Empolyees';
import axios from 'axios';




class App extends Component {

  // STATE do przechowywania naszych danych
  state = {
    employees: [{name: 'Employee1'}, {name: 'Employee2'}, {name: 'Employee3'}]
} 


  componentDidMount() {
    axios.get('https://dummy.restapiexample.com/api/v1/employees', null).then(response => {
      console.log(response);
    });
  }


  render(){
    
    return (
     
      
      <div className='App'>
        <h1>Employees</h1>
        <Employees employees={this.state.employees} />
      </div>
      
     );
  }
}

export default App;