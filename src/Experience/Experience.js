
import React from "react";
import './Experience.css';
const Experience = ({range, company, title, description}) =>{
    return (
    <div className="Experience">
        <div className="Experience__left">
            <div className="Experience__range">
                {range}
            </div>
            <div className="Experience__company">
                {company}
            </div>
        </div>
    <div className="Experience__right">
        <div className="Experience__title">
            {title}
        </div>
        <div className="Experience__description">
            {description}
        </div>
    </div>
  </div>)
}
export default Experience;
