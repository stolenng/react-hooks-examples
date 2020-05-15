import React, {useEffect, useState} from 'react';

const NormalUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`log use effect - ${count}`);
    });

    const inc = () => setCount(count+1);

    return (
        <div>
            <button onClick={inc}>Inc</button>
        </div>
    )
};

const asyncAction = () => new Promise(resolve => setTimeout(resolve, 300));

const AsyncUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const asyncFunc = async () => {
            await asyncAction();
            // can update state here also
            console.log('async action done')
        }

        asyncFunc();
    });

    const inc = () => setCount(count+1);

    return (
        <div>
            <button onClick={inc}>Inc</button>
        </div>
    )
}