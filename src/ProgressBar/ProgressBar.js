
import React from "react";
import './ProgressBar.css';
const ProgressBar = ({value}) =>{

    return (<div className="ProgressBar">
    <div className="ProgressBar__bar" style={{width: value}}></div>
  </div>)
}
export default ProgressBar;
