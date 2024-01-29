import React, { Component } from 'react';
import './App.css'
import User from './User/User'

class App extends Component {

  active = 'Active';
  inactive = 'Inactive';
 // STATE do przechowywania naszych danych
  state = {
    username: "Kondzio",
    role: "admin",
    active: true
  } 
  
  render(){

    return (
      <div className='App'>
      <h1 className='Red-color'>Hello, I am a react App</h1>
      
      <div className='FormContainer'>
        <label className='FormLabel'>Username</label>
        <input className='FormElement' type='text' id='username' />
        <label className='FormLabel'>Role</label>
        <input className='FormElement' type='text' id='role' />
        <label className='FormLabel'>Active</label>
        <input className='FormElement' type='checkbox' id='active'/>
        <button className='FormButton'>Show user</button>
      </div>

      
      <User username = {this.state.username} role = {this.state.role} >{this.state.active ? this.active : this.inactive }</User>
      
      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am a react App))
    );
  }
}

export default App;