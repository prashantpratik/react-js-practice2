import React from 'react';
import './CharComponent.css'

const charComponent = (props) =>{
return (
<div className = "CharComponent" onClick={props.deleter}>
{props.char} 
</div>
);

}

export default charComponent;

