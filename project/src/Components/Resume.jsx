import  { useState } from 'react';
import './Resume.css'

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section id="resume" className="resume-section">
      <h2>My Resume</h2>
      <button onClick={toggleResume}>
        {showResume ? 'Hide Resume' : 'Show Resume'}
      </button>

      {showResume && (
        <object
          data="Keerthiraj resume.pdf"  
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>Your browser does not support PDFs. You can <a href="/resume.pdf">download the resume here</a>.</p>
        </object>
      )}
    </section>
  );
}

export default Resume;
