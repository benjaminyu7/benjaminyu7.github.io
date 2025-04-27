import React from 'react';
import profile from '../resume/profile.jpeg';
import '../../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Software Development Engineer</h1>
        <h2>Benjamin Yu</h2>
      </header>
      <section className="bio">
        <div style={{ borderRadius: '50%', padding: '10px' }}> 
          <img src={profile} alt="Benjamin Yu" style={{ borderRadius: '50%' }} />
        </div>
      </section>

      <section className="background">
        <h2>Background</h2>
        <p>Hi, I’m a software engineer with over five years of experience building robust, scalable applications. I hold a B.S. in Computer Science from the Stony Brook University, and have contributed to major projects at both Amazon and Microsoft. I’m passionate about using C#, Java, and Python to solve real-world problems, and I thrive in agile, fast-paced environments where creative thinking and collaboration are valued.</p>
        <ul>
          <li>5+ years of experience in software development</li>
          <li>Proficient in languages such as C#, Java, Python</li>
          <li>Experience with Agile development methodologies</li>
        </ul>
      </section>
      <section className="value-proposition">
        <h2>How I Can Add Value</h2>
        <p>
          I help teams accelerate innovation and ensure reliability by bringing expertise in cloud engineering and process automation. Here’s how I can help you achieve technical and business goals:
        </p>
        <ul>
          <li>Develop and deploy scalable software applications to the cloud (AWS, Azure)</li>
          <li>Implement real-time monitoring and telemetry for proactive issue detection and performance optimization</li>
          <li>Design and architect robust cloud-native solutions to maximize reliability and cost-efficiency</li>
          <li>Create comprehensive technical documentation and clear video tutorials to onboard and empower your team</li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;