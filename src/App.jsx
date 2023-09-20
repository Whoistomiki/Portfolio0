import React from 'react';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Experiences from './components/experiences/Experiences';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';

const App = () => {
    return (
      <>
        <Header />
        <Introduction />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Navigation />
      </>
    )
  }
  
  export default App
