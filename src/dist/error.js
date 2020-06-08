import React from 'react';

const error=(props)=>{
    const {errorTitle}=props;
return(
    <div>
        <span>{errorTitle}</span>
    </div>
)
}

export default error;