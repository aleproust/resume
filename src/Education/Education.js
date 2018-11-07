
import React from "react";
import './Education.css';
const Education = ({range, school, schoolLink, title }) =>
    (<div className="Education">
        <div className="Education__left">
            <i className="Education__icon fas fa-school"></i>
        </div>
        <div className="Education__right">
            <a href={schoolLink} target="_blank" rel="noopener noreferrer"><h2 className="Education__school">{school}</h2></a>
            <p className="Education__title">{title} {range[0]} - {range[1]}</p>
        </div>
    </div>)

export default Education;
