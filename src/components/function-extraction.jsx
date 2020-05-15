import React, {useState, useCallback} from 'react';

const FunctionWithoutExtraction = () => {
    const [arr, setArr] = useState([5, 67, 13, 23, 6]);

    const showMin = useCallback(() =>{
        var len = arr.length,
            min = Infinity;
        while (len--) {
            if (arr[len] < min) {
                min = arr[len];
            }
        }

        return min;
    }, [arr]);

    return (
        <div>
            <span>{showMin()}</span>
        </div>
    )
};

const minFunc = (arr) => {
    var len = arr.length,
        min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }

    return min;
};

const FunctionWithExtraction = () => {
    const [arr, setArr] = useState([5, 67, 13, 23, 6]);

    return (
        <div>
            <span>{minFunc(arr)}</span>
        </div>
    )
};
