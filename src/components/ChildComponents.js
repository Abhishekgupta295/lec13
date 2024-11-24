import React from 'react'

const ChildComponents = React.memo(
    (props) => {
 
        console.log("Child Component got rerender")
        return (
    
        <div>
            <button
            onClick={props.compfunc}
            >
                {props.btnname}
            </button>
       </div>
      )
    }
);

export default ChildComponents