import React, { useState } from "react"




const Customer = () => {
    const [customerState, setCustomerState] = useState({
        pickedName: 'Ada'
    });

    const [ namesState, setNamesState] = useState({names: ['Ada', 'Pat', 'Bart']});

    const switchName = () => {
        const namePool = namesState.names;
        const number = Math.floor(Math.random()*3);//funkcja zmieniajaca losowo imiona.
        setCustomerState({names: namePool, pickedName: namePool[number]});
    }

    return(
        <div>
            <h2>Customer:</h2>
            <h3>{customerState.pickedName}</h3>
            <button onClick={switchName}>change name</button>
        </div>
    );
}

export default Customer;