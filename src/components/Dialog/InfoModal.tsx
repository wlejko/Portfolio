import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  modalSpace: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  imageSpace: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export interface InfoModalProps {
  image: string;
  description: string;
  projectName: string;
  open: boolean;
  onClose: () => void;
}

export default function InfoModal(props: InfoModalProps) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState("false");
  const { image, description, projectName, open, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} className={classes.modalSpace}>
      <DialogTitle style={{ textAlign: "center" }}>{projectName}</DialogTitle>
      <div className={classes.imageSpace}>
        <img src={image} alt={projectName} style={{ height: "200px" }} />
      </div>
      <div>
        <Typography
          style={{ textAlign: "center", marginTop: "12px", fontSize: "18px" }}
        >
          {description}
        </Typography>
      </div>
      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
}
