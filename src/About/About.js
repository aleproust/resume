import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./About.css";
import Expertise from '../Expertise/Expertise';

const expertises =[{title: 'Web Development', icon:'fas fa-code', description:'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his'}, 
{title: 'DevOps', icon:'fas fa-rocket', description:'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his'},
{title: 'Team Player', icon:'fas fa-people-carry', description:'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his'}]


const About = () => {
  return (
    <div className="About">
    <Title text="About"></Title> 
    <Paragraph text="Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his, aliquando abhorreant vituperata ne eum. Id qui habeo erant consul, tempor viderer minimum sed ea. Labitur laboramus mea id, eos detraxit assentior ad. Scripta ocurreret repudiandae mea no, an vim liber sonet vivendo. At eos vidit impetus insolens, in dolore intellegebat eos."></Paragraph>
    <div className="About__expertises">
    {expertises.map(({title, icon, description}, index) => <Expertise key={index} title={title} iconName={icon} description={description}></Expertise>)}
    </div>
    </div>
  )};
  
export default About;