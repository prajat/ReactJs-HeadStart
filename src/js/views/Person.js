import React from 'react';

export const person = (props) => {
    return (
        <div className="person">
            <p>Name: {props.name}<br /> Age: {props.age}</p>
            {/* <p>{props.children}</p>    */}
            <input className="person__input" type="text" onChange={( event ) => {
                props.onChange( event, props.id );
            }} value={props.name}></input> 
        </div>
    )
};