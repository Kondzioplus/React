import React, { Component } from 'react';
import './App.css'
import Employees from '../components/Employees/Empolyees';




class App extends Component {

  // STATE do przechowywania naszych danych
  state = {
    employees: [{name: 'Employee1'}, {name: 'Employee2'}, {name: 'Employee3'}]
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