import React from "react";
import "./Expertise.css";

const Expertise = (({iconName, title, description }) => {
    const iconClass=`Expertise__icon ${iconName}` 
    return (<div className="Expertise">
        <i  className={iconClass} ></i>
        <h2>{title}</h2>
        <p className="Expertise__description">{description}</p>
    </div>)
});
    
  
export default Expertise;