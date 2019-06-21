import React from 'react';

const person=(props)=>{
    return (  
        <div className="person">
            <p onClick={props.click}>Hey, I am {props.name} and i'm {props.age} years old</p>
            <p>{props.children}</p>   
            <input className="person__input" type="text" onChange={props.changed} value={props.name}></input> 
        </div>
    )
};
export default person; 