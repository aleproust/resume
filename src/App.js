import React, { Component } from 'react';
import About from './About/About';
import './App.css';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import Title from './Title/Title';
import Experience from './Experience/Experience';


class App extends Component {
  render() {

    const experiences = [{
      range: 'February 2017 - Present',
      company: 'Ubisoft',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his, aliquando abhorreant vituperata ne eum. Id qui habeo erant consul, tempor viderer minimum sed ea. Labitur laboramus mea id, eos detraxit assentior ad. Scripta ocurreret repudiandae mea no, an vim liber sonet vivendo. At eos vidit impetus insolens, in dolore intellegebat eos.'
    },
    {
      range: 'May 2015 - January 2017',
      company: 'Canal+',
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, at elit saepe corpora est, soluta cotidieque ad his, aliquando abhorreant vituperata ne eum. Id qui habeo erant consul, tempor viderer minimum sed ea. Labitur laboramus mea id, eos detraxit assentior ad. Scripta ocurreret repudiandae mea no, an vim liber sonet vivendo. At eos vidit impetus insolens, in dolore intellegebat eos.'
    }]
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
              {experiences.map(({range, company, title, description}, index) => 
              (<Experience key={index} range={range} company={company} title={title} description={description}></Experience>))}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
