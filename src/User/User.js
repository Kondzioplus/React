import React from 'react';


const user = (props) => {
    return <div>
    <button onClick={props.buttonClick} className='FormButton'>Show user</button>
        <h2>Username: {props.username}</h2>
    <h3>Role: {props.role}</h3>
    <p>State: {props.children}</p>
    </div>
}

export default user;