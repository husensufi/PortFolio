import  'react';
import './About.css'; // Import the CSS file for styling
import about_us from "../assets/about_us.jpg"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img src={about_us} alt="Keerthiraj" className="profile-photo" />
      </div>
      <div className="about-text">
        <h1><strong>About Me</strong></h1>
        <p>
          Hi, I’m <b>Husen Basha</b>, a passionate and dedicated <b>Backend Engineer specializing in .NET technology with C#</b>. I hold a <b>Master’s degree in Computer Applications (MCA)</b> from <b>St. Joseph Engineering College, Mangaluru</b>, under <b>Vishweshwaraya Technological University, Belagavi</b>.
        </p>
        <p>
          Currently, I’m gaining hands-on experience as an intern at <strong> NexaInnov Solution, Mangalore</strong>, where I’m honing my skills in backend development and real-world software engineering practices.
        </p>
        <p>
          With a strong foundation in software development and problem-solving, I’ve worked on various projects, including a <strong>banking enterprise system </strong>and a <strong>table booking system.</strong> I also have experience in data analytics and have analyzed Zomato data using Python.
        </p>
        <p>Beyond coding, I’m enthusiastic about building efficient and scalable solutions and am always eager to learn new technologies. I enjoy working on innovative side projects like developing games and e-commerce platforms using modern frameworks like React.</p>
      </div>
    </div>
  );
};

export default About;
