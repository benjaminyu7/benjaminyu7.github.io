import React from "react";
import Box from "@mui/material/Box";
import { Link, Button } from '@mui/material';

const ResumePage = ({ data }) => {
  const styles = {
    resumeItemWrapper: {
      maxWidth: "800px",
      margin: "0 auto",
      width: "100%",
    },
    resumeItem: {
      padding: "20px",
      alignSelf: "center",
      marginBottom: "20px",
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
      overflowX: "hidden",
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
  };

  return (
    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
          <Link href="https://docs.google.com/document/d/1cGkj57Fdo9FfO1gtSKR_uN8Y10yQ7v5pLkcKuWlB59g/edit?usp=sharing" target="_blank">
            <Button variant="contained" color="primary">
              View Resume (Google Doc)
            </Button>
          </Link>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <section className="mb-6">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            {data.workExperiences.map((job, index) => (
              <div key={index} style={styles.resumeItemWrapper}>
                <div style={styles.resumeItem}>
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
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <div style={styles.resumeItemWrapper}>
              <div style={styles.resumeItem}>
                <p style={styles.resumeItemP} className="font-bold">{data.education.school}</p>
                <p style={styles.resumeItemP}>{data.education.degree} - {data.education.graduationDate}</p>
                <p style={styles.resumeItemP} className="text-sm mt-2">{data.education.courses}</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            {data.projects.map((project, index) => (
              <div key={index} style={styles.resumeItemWrapper}>
                <div style={styles.resumeItem}>
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
              </div>
            ))}
          </section>


        </div>
      </div>
    </Box>
  );
};

export default ResumePage;