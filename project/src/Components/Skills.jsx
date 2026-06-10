//import React from 'react';
import "./Skills.css"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaJsSquare, FaJava, FaDocker, FaGithub, FaServer, FaDatabase } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const SkillWithProgress = ({ skill, level, icon }) => (
    <div className="skill">
        <div className="skill-info">
            {icon && <div className="icon">{icon}</div>}
            <span className="skill-name">{skill}</span>
        </div>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Frontend Development</h3>
                    <SkillWithProgress skill="React" level={75} icon={<FaReact size={30} color="#61dafb" />} />75%
                    <SkillWithProgress skill="JavaScript" level={60} icon={<FaJsSquare size={30} color="#f7df1e" />} />60%
                    <SkillWithProgress skill="HTML5" level={80} icon={<FaHtml5 size={30} color="#e34f26" />} />80%
                    <SkillWithProgress skill="CSS3" level={75} icon={<FaCss3Alt size={30} color="#1572b6" />} />75%
                </div>
                <div className="skill-category">
                    <h3>Backend Development</h3>
                    <SkillWithProgress skill="Node.js" level={60} icon={<FaNodeJs size={30} color="#68a063" />} />61%
                    <SkillWithProgress skill="Java" level={85} icon={<FaJava size={30} color="#dao384" />} />85%
                    <SkillWithProgress skill="Express JS" level={85} icon={<FaServer size={30} color="#dao384" />} />82%
                    
                    
                </div>
                <div className="skill-category">
                    <h3>Tools & Version Control</h3>
                    <SkillWithProgress skill="Git" level={80} icon={<FaGit size={30} color="#f34f29" />} />78%
                    <SkillWithProgress skill="Docker" level={35} icon={<FaDocker size={30} color="blue" />} />35%
                    <SkillWithProgress skill="GitHub" level={65} icon={<FaGithub size={30} color="black" />} />67%
                    
                </div>
                <div className="skill-category">
                    <h3>Data Bases</h3>
                    <SkillWithProgress skill="MySQL" level={70} icon={<FaDatabase size={30} color="#f34f29" />} />70%
                    <SkillWithProgress skill="Mongo DB" level={85} icon={<SiMongodb size={30} color="green" />} />85%%
                    
                </div>
            </div>
        </section>
    );
};

export default Skills;
