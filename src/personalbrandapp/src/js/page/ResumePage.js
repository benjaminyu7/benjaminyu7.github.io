import React from "react";
import Box from "@mui/material/Box";
import seattleGif from '../resume/seattle.gif';
import profile from '../resume/profile.jpeg';

const ResumePage = ({ data }) => {
  const styles = {
    resumeItem: {
      width: "760px",
      alignSelf: "center",
      marginBottom: "20px",
      padding: "20px",
      borderRadius: "20px",
      background: "#ffffff",
    },
    resumeItemH3: {
      margin: "0px",
    },
    resumeItemH4: {
      margin: "0px",
      fontWeight: "normal",
    },
    resumeItemP: {
      margin: "0px",
    },
    resumeItemUl: {
      margin: "0px",
    },
    resumeDutiesLi: {
      fontSize: "18px",
    },
    resumeSkillsLi: {
      marginTop: "5px",
      marginRight: "5px",
      paddingRight: "5px",
      paddingLeft: "5px",
      display: "inline",
      fontSize: "16px",
      borderRadius: "10px",
      border: "1px solid #000000",
    },
      bioWrapper: {
        display: "flex",
        width: "800px",
        alignSelf: "center",
        marginTop: "50px",
        background: "#ffffff",
        borderRadius: "20px",
    },
    bio: {
        margin: "10px",
        marginLeft: "20px",
        padding: "0px",
        paddingTop: "20px",
        alignSelf: "center",
        color: "#000000",
    },
    bioPic: {
        margin: "20px",
        borderRadius: "50%",
    },
    seattleGif: {
        width: "800px",
        alignSelf: "center",
        marginTop: "100px",
        borderRadius: "20px",
    }
  };

  return (
    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className="w-full max-w-md p-6 bg-white shadow rounded">
        <section className="mb-6">
        <img src={seattleGif} alt="seattle-timelapse" style={styles.seattleGif} />          
        <h2 className="text-xl font-semibold">Biography</h2>
        <div style={styles.bioWrapper}>
          <img src={profile} alt="Benjamin Yu" style={styles.bioPic} />
          <p style={styles.bio}>{data.biography}</p>
        </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          {data.workExperiences.map((job, index) => (
            <div key={index} style={styles.resumeItem}>
              <h3 style={styles.resumeItemH3}>{job.title} - {job.location}</h3>
              <p style={styles.resumeItemP}>{job.dates}</p>
              <ul style={styles.resumeItemUl}>
                {job.tasks.map((task, i) => (
                  <li key={i} style={styles.resumeDutiesLi}>{task}</li>
                ))}
              </ul>
              <p className="mt-2 font-semibold">Technologies:</p>
              <p className="text-sm">{job.technologies.join(", ")}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <div style={styles.resumeItem}>
            <p style={styles.resumeItemP} className="font-bold">{data.education.school}</p>
            <p style={styles.resumeItemP}>{data.education.degree} - {data.education.graduationDate}</p>
            <p style={styles.resumeItemP} className="text-sm mt-2">{data.education.courses}</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} style={styles.resumeItem}>
              <h3 style={styles.resumeItemH3}>{project.title}</h3>
              <p style={styles.resumeItemP}>{project.dates}</p>
              <ul style={styles.resumeItemUl}>
                {project.tasks.map((task, i) => (
                  <li key={i} style={styles.resumeDutiesLi}>{task}</li>
                ))}
              </ul>
              <p className="mt-2 font-semibold">Technologies:</p>
              <p className="text-sm">{project.technologies.join(", ")}</p>
            </div>
          ))}
        </section>
      </div>
    </Box>
  );
};

export default ResumePage;