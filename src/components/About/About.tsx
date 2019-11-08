import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSpring, animated } from "react-spring";
import about from "../../images/about.png";

const useStyles = makeStyles({
  root: {
    fontSize: "2rem",
    backgroundColor: " rgba(0,0,0,.5)",
    width: "100%",
    height: "90vh",
    display: "flex"
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "0 auto"
  },
  textContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#f2eee5",
    flexDirection: "column",
    width: "80%"
  }
});

export default function About() {
  const classes = useStyles();
  const appearingText = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 }
  });
  const isMobileVersion = useMediaQuery("(min-width:530px)");
  return (
    <div className={classes.root}>
      <animated.div style={appearingText} className={classes.container}>
        <div className={classes.textContainer}>
          <h1>Hello</h1>
          <p style={{ fontSize: "16px", width: "80%", textAlign: "center" }}>
            Im, Wojciech. Im 22 years old. Im begginer at react developming but
            Im doing my best to do something which looks good. My basic skills
            are: html 5, css 3, SASS, react, material-ui. My general developming
            skills are: ability to use git, searching for solutions, usage of
            terminal, data structures and algorithms. For purpose of type
            checking i use TypeScript. I accomplished UNIVERSITY OF MARIA CURIE
            SKLODOWSKA in LUBLIN where I was studying IT. I finished Program
            Szkoleniowy JavaScript in News Hub Media Sp. Z
            o.o(04.07.2019-30.08.2019) I have English certificate B2. Im person
            which likes to smile a lot and jokes from time to time. I think im
            people person. I realy like to do any kind of sport activity. My
            biggest hobby is football which i play from almost 10 years. Im
            person which likes to learn new things and is realy stubborn to
            finish started things.
          </p>
        </div>
        <img style={{ height: "556px" }} src={about} />
      </animated.div>
    </div>
  );
}
