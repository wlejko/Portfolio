import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import SvgIcon from "@material-ui/core/SvgIcon";
import InfoModal from "../Dialog/InfoModal";
import { Dialog } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
    width: 180,
    flexDirection: "column",
    margin: "0px 12px 12px 0px"
  },
  media: {
    height: 100
  },
  infoButton: {
    cursor: "pointer",
    "&:hover": {
      color: "#51dacf"
    }
  }
});

export interface ProjectProps {
  image: string;
  description: string;
  projectName: string;
}

export default function Projects(props: ProjectProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { image, description, projectName } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title={projectName}
        />

        <CardActions style={{ justifyContent: "center" }}>
          <SvgIcon className={classes.infoButton} onClick={handleClickOpen}>
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </SvgIcon>
        </CardActions>
      </Card>
      <InfoModal
        image={image}
        description={description}
        projectName={projectName}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
