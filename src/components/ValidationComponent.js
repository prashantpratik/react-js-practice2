import React from 'react';

const validationComponent = (props) => {
    let validationMessage = "";
    if(props.textLength < 5)
        validationMessage = "Text too short"
    else 
        validationMessage = "Text too long"
return (
    <p>{validationMessage}</p>
);
}

export default validationComponent;