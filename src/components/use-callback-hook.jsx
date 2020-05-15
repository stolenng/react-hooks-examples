import React, {useState, useCallback} from 'react';

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const inc = useCallback(() => setCount(count+1), [count]);

    return (
        <div>
            <button onClick={inc}>Inc</button>
        </div>
    )
}