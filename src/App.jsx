import React from 'react';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Experiences from './components/experiences/Experiences';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

const App = () => {
    return (
      <>
        <Header />
        <Introduction />
        <Experiences />
        <Skills />
        <Projects />
      </>
    )
  }
  
  export default App
