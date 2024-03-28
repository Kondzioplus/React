import React, { Component } from "react";
import styles from './EmployeeDetails.module.css';

class EmployeeDetails extends Component {
    render(){
        return(
            <div className={styles.EmployeeDetails}>
                <div className={styles.EmployeeDetailsDiv}>Name: {this.props.name}</div>
                <div className={styles.EmployeeDetailsDiv}>Username: {this.props.username}</div>
                <div className={styles.EmployeeDetailsDiv}>Email: {this.props.email}</div>
            </div>
        )
    }
}

export default EmployeeDetails;