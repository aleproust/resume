import React, { Component } from 'react';
import About from './About/About';
import './App.css';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import Title from './Title/Title';
import Experience from './Experience/Experience';
import Education from './Education/Education';

const experiences = [{
  range: 'February 2017 - Present',
  company: 'Ubisoft',
  title: 'Web Developer',
  place: 'Montréal, QC Canada',
  description: 'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his, aliquando abhorreant vituperata ne eum. Id qui habeo erant consul, tempor viderer minimum sed ea. Labitur laboramus mea id, eos detraxit assentior ad. Scripta ocurreret repudiandae mea no, an vim liber sonet vivendo. At eos vidit impetus insolens, in dolore intellegebat eos.'
},
{
  range: 'May 2015 - January 2017',
  company: 'Canal+',
  place: 'Paris, France',
  title: 'Web Developer',
  description: 'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his, aliquando abhorreant vituperata ne eum. Id qui habeo erant consul, tempor viderer minimum sed ea. Labitur laboramus mea id, eos detraxit assentior ad. Scripta ocurreret repudiandae mea no, an vim liber sonet vivendo. At eos vidit impetus insolens, in dolore intellegebat eos.'
}]

const educations = [{
    range:[2010, 2013],
    school: 'Esigelec',
    schoolLink:'http://www.esigelec.fr/en',
    title: 'Engineering degree'
  },
  {
    range:[2008, 2010],
    school: 'Marcel Sembat College',
    title: 'Technician degree'
  },
  {
    range:[2005, 2008],
    school: 'Marcel Sembat College',
    title: 'Bachelor degree'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="Page">
          <div className="Page__inner">
            <Contacts></Contacts>
            <div className="Page__section">
              <About></About>  
            </div>
            <div className="Page__section">
              <Title text="Skills"></Title>
              <Skills></Skills>
            </div>
            <div className="Page__section">
              <Title text="Experiences"></Title>
              {experiences.map(({range, company, place, title, description}, index) => 
              (<Experience key={index} range={range} place={place} company={company} title={title} description={description}></Experience>))}
            </div>
            <div className="Page__section">
              <Title text="Education"></Title>
              <div className="Education__container">{educations.map(({range, school, schoolLink, title}, index) => 
                <Education key={index} range={range} school={school} schoolLink={schoolLink} title={title}></Education>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
