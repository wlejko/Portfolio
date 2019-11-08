import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import photo from "../../images/wojtaz.png";
import { useSpring, animated } from "react-spring";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    fontSize: "2rem",
    backgroundColor: " rgba(0,0,0,.5)",
    width: "100%",
    height: "90vh"
  },
  container: {
    width: "60%",
    height: "100%",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center"
  },
  photoStyle: {
    height: "544px",
    marginRight: "24px"
  },
  textContainer: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    color: "#f2eee5"
  }
});

export default function Home() {
  const classes = useStyles();
  const isMobileVersion = useMediaQuery("(min-width:530px)");
  const appearingText = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <div className={classes.root}>
      <animated.div style={appearingText} className={classes.container}>
        {isMobileVersion && (
          <div>
            <img className={classes.photoStyle} src={photo} alt="Wojciech" />
          </div>
        )}

        <div className={classes.textContainer}>
          <p>Hi! Im , Wojciech !</p>
          <p style={{ fontSize: "3rem" }}>Welcome on my site !</p>
        </div>
      </animated.div>
    </div>
  );
}
