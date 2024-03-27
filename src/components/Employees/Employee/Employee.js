import React, { Component } from "react";
import styles from './Employee.module.css';


//tworzymy nasz COMPONENT
class Employee extends Component {

    render(){
        return(
            <div className={ styles.Employee}> Name: {this.props.name}</div>
        );
    }
}

export default Employee;