import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSpring, animated } from "react-spring";
import ProjectCard from "../Card/ProjectCard";
import phone from "../../images/phone.png";

const useStyles = makeStyles({
  root: {
    fontSize: "2rem",
    backgroundColor: " rgba(0,0,0,.5)",
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    color: "#f2eee5"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  projectsSpace: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "90%",
    justifyContent: "center"
  }
});

export default function Projects() {
  const classes = useStyles();

  const [projectList, setProjectList] = useState([
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project1"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project2"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project3"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project4"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project5"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project6"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project7"
    },
    {
      image: phone,
      description:
        "hello this is description for this project. I hope you will enjoy watching my project",
      projectName: "project8"
    }
  ]);

  const appearingProjects = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 }
  });
  const isMobileVersion = useMediaQuery("(min-width:530px)");
  return (
    <div className={classes.root}>
      <animated.div style={appearingProjects}>
        <div className={classes.container}>
          <h1 style={{ marginTop: "24px", marginBottom: "40px" }}>
            My projects
          </h1>
          <div className={classes.projectsSpace}>
            {projectList.map(project => (
              <ProjectCard
                image={project.image}
                description={project.description}
                projectName={project.projectName}
              />
            ))}
          </div>
        </div>
      </animated.div>
    </div>
  );
}
