import React, {useState} from 'react';

const ComponentLifeCycle = () => {
    const [count, setCount] = useState(0);
    const sameValue = 5;

    console.log(`Each render value is the same - ${sameValue}`);
    console.log(`count used with useState, gets updated after renders - ${count}`);

    const inc = () => setCount(count+1);

    return (
        <div>
            <button onClick={inc}>Inc</button>
        </div>
    )
}