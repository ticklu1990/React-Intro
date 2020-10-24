import React from 'react';


const ChildComponent = (props) =>{
console.log('Child',props);
    return(
    <div>
     <p>{props.count}</p>
    <button onClick={props.handleIncrement}>Increment from Child Component</button>
    </div>
    )

}

export default ChildComponent;
