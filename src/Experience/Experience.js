
import React from "react";
import './Experience.css';
const Experience = ({range, company, title, place, description}) =>{
    return (
    <div className="Experience">
        <div className="Experience__left">
            <div className="Experience__range">
                {range}
            </div>
            <div className="Experience__company">
                {company}
            </div>
            <div className="Experience__place">
                <i class="fas fa-map-marker-alt"></i> {place}
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
