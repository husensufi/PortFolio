import  'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'; 
import About from './Components/About';
import Projects from './Components/Projects';
//import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
