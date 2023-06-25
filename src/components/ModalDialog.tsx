import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";
import "../styles/ModalDialog.css";

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <div className="formtxt">Sign In / Sign Up </div>
      <Form handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;

