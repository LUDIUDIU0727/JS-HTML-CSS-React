import React from "react";


const DemoOutput = props => {
    return (
        <>
            <p>{props.show ? 'This is New!' : ''}</p>
        </>
    )


};


export default React.memo(DemoOutput);
//only the props changed this component will be re-excuted
//functions are objects in js