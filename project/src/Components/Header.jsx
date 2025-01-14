import  'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li> {/* Fixed anchor tag syntax */}
          <li><a href="#about">About Me</a></li> {/* Changed <nav> to <a> */}
          <li><a href="#projects">Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          {/* <li><a href="#resume">Resume</a></li> */}
          <li><a href="#contact">Contact</a></li> {/* Fixed attribute name */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
