import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSpring, animated } from "react-spring";
import ProjectCard from "../Card/ProjectCard";
import paf from "../../images/episodes.jpg";
import calculatorImg from "../../images/calculato.jpg";

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
      image: paf,
      description:
        "This is site about Phineas and Ferb and their adventures. You can find here information about characters and episodes.",
      projectName: "Phineas and Ferb",
      linkToGit: "https://github.com/wlejko/Phineas-and-Ferb-website"
    },
    {
      image: calculatorImg,
      description: "This is simple calculator created in react with hooks",
      projectName: "Simple calculator",
      linkToGit: "https://github.com/wlejko/Simple-calculator"
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
                linkToGit={project.linkToGit}
              />
            ))}
          </div>
        </div>
      </animated.div>
    </div>
  );
}
