import  'react';
import './Home.css';
import husen from "../assets/husen_image.webp"

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Section: Avatar */}
      <div className="home-avatar">
        <img
           src={husen} alt="User Avatar"  className="avatar-img"/>
      </div>

      {/* Right Section: Text */}
      <div className="home-text">
        <h1 className="home-title">Hi, I'm Husen Basha</h1>
        <p className="home-subtitle">MCA Graduate | Full Stack Developer | Tech Enthusiast</p>
        <p className="home-description">
          Hello!
          I am currently pursuing my Master of Computer Applications (MCA) at St. Joseph Engineering College, Mangalore. With a strong passion for programming languages and web development, I have honed my skills through coursework and hands-on projects, gaining proficiency in languages like C, Python, Java, HTML, and CSS. These experiences have equipped me with a solid foundation in software development and the ability to tackle complex technical challenges.

          I am actively seeking opportunities where I can apply my skills, collaborate with innovative teams, and contribute to the development of impactful software solutions. My goal is to create efficient, user-friendly, and modern applications that solve real-world problems.

          Let’s connect and explore how we can work together to bring ideas to life!


        </p>
        <p className="home-description">
          I'm constantly learning and growing in the field of software engineering.
        </p>
        <p className="home-description">
          Feel free to explore my work and get in touch!
        </p>
      </div>
    </div>
  );
};

export default Home;
