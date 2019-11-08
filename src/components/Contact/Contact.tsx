import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import { useSpring, animated } from "react-spring";

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
    flexDirection: "column",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center"
  },
  contactTextStyle: {
    color: "#f2eee5",
    display: "flex",
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "24px"
  },
  contactListContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#f2eee5"
  }
});

export function createListWithLinks(
  name: string,
  myName: string,
  icon: string,
  url: string
) {
  return (
    <div style={{ display: "flex", marginBottom: "12px" }}>
      <img
        style={{ width: "40px", height: "40px", marginRight: "8px" }}
        src={icon}
      />
      <a
        href={url}
        target="_blank"
        style={{ textDecoration: "none", color: "#f2eee5" }}
      >
        {myName}
      </a>
    </div>
  );
}

export function createListWithoutLinks(
  name: string,
  myName: string,
  icon: string,
  url: string
) {
  return (
    <div style={{ display: "flex", marginBottom: "12px" }}>
      <img
        style={{ width: "40px", height: "40px", marginRight: "8px" }}
        src={icon}
      />
      {url}
    </div>
  );
}

export default function Contact() {
  const classes = useStyles();
  const appearingText = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 }
  });
  const [contactListLinks, setContactListLinks] = useState([
    {
      name: "facebook",
      myName: "Wojciech Lejko",
      icon: facebook,
      url: "https://www.facebook.com/rudywojtas"
    },
    {
      name: "linkedin",
      myName: "Wojciech Lejko",
      icon: linkedin,
      url: "https://www.linkedin.com/in/wojciech-lejko-91a699180/"
    }
  ]);
  const [contactList, setContactList] = useState([
    {
      name: "email",
      myName: "Wojciech Lejko",
      icon: email,
      url: "wojciechs.lejko@gmail.com"
    },
    {
      name: "phone",
      myName: "Wojciech Lejko",
      icon: phone,
      url: "502 846 801"
    }
  ]);
  const isMobileVersion = useMediaQuery("(min-width:530px)");
  return (
    <div className={classes.root}>
      <animated.div style={appearingText} className={classes.container}>
        <div className={classes.contactListContainer}>
          <p className={classes.contactTextStyle}>
            You can contact{" "}
            <span style={{ color: "#51dacf", margin: "0px 8px" }}>me</span> at:{" "}
          </p>
          {contactListLinks.map(item =>
            createListWithLinks(item.name, item.myName, item.icon, item.url)
          )}
          {contactList.map(item =>
            createListWithoutLinks(item.name, item.myName, item.icon, item.url)
          )}
        </div>
      </animated.div>
    </div>
  );
}
