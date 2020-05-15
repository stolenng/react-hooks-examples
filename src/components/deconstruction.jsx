import React from 'react';

const FunctionWithoutDeconstruction = (props) => {
    return (
        <div>
            <span>props.name</span>
            <span>props.lastName</span>
            <span>props.title</span>
            <span>props.description</span>
        </div>
    )
}

const FunctionWithDeconstruction = ({name, lastName, title, description}) => {
    return (
        <div>
            <span>name</span>
            <span>lastName</span>
            <span>title</span>
            <span>description</span>
        </div>
    )
}