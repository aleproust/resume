import React from "react";
import "./Skills.css";
import ProgressBar from '../ProgressBar/ProgressBar'
const Skills = () => {

    const skills = [{
        title: 'Javascript',
        value: '80%'
    },
    {
        title: 'CSS',
        value: '70%'
    },
    {
        title: 'DevOps',
        value: '65%'
    },
    {
        title: 'DevOps',
        value: '65%'
    },
    {
        title: 'Angular',
        value: '90%'
    }, 
    {
        title: 'NodeJS',
        value: '85%'
    }]
        return (<div className="Skills">
            {skills.map(({title, value})=> {
                return (
                    <div className="Skills__item">
                        <h3>{title}</h3>
                        <ProgressBar value={value}></ProgressBar>
                    </div>
                )
            })}
        </div>)
    }
;
  
  export default Skills;