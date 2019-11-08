import React, { useState } from "react";
import mountains from "../../images/mountains.png";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${mountains})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  anchors: {
    "&:hover": {
      color: "#6d0c74"
    },
    cursor: "pointer",
    margin: "32px"
  },
  anchorsMobile: {
    "&:hover": {
      color: "#6d0c74"
    },
    cursor: "pointer",
    margin: "12px"
  },
  navgiation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.8rem",
    height: "8vh"
  },
  navgiationMobile: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.2rem"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem",
    height: "8vh",
    color: "#f2eee5"
  },
  footerMobile: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.2rem"
  }
});

function switchView(currentView: string) {
  switch (currentView) {
    case "home":
      return <Home />;
    case "projects":
      return <Projects />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
  }
}

export default function Main() {
  const classes = useStyles();
  const [navigationList, setNavigationList] = useState([
    {
      name: "home",
      isActive: "false"
    },
    {
      name: "projects",
      isActive: "false"
    },
    {
      name: "about",
      isActive: "false"
    },
    {
      name: "contact",
      isActive: "false"
    }
  ]);
  const [currentView, setView] = useState("main");
  const isMobileVersion = useMediaQuery("(min-width:530px)");

  return (
    <div className={classes.root}>
      <nav
        className={
          isMobileVersion ? classes.navgiation : classes.navgiationMobile
        }
      >
        {navigationList.map(item => (
          <p
            className={
              isMobileVersion ? classes.anchors : classes.anchorsMobile
            }
            onClick={() => setView(item.name)}
          >
            {item.name}
          </p>
        ))}
      </nav>
      {switchView(currentView)}
      <footer
        className={isMobileVersion ? classes.footer : classes.footerMobile}
      >
        @Wojtek
      </footer>
    </div>
  );
}
