import React, {useState, useCallback} from 'react';

const UseCallbackStaleData = () => {
    const [count, setCount] = useState(0);

    const inc = useCallback(() => setCount(count+1), []);

    return (
        <div>
            <button onClick={inc}>Inc</button>
        </div>
    )
};

const UseCallbackUpToDateData = () => {
    const [count, setCount] = useState(0);

    const inc = useCallback(() => setCount(count+1), [count]);

    return (
        <div>
            <button onClick={inc}>Inc</button>
        </div>
    )
}