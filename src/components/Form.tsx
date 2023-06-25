import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ForgotPasswordModal from "./ForgotPassword";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Invalid Credentials");
    }
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      alert("Submitted");
    }

    handleClose();
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authtoken and  redirect
      localStorage.setItem("token", json.authToken);

      alert("You are Logged in Succesfully");
      handleClose();
    } else {
      alert("invalid credentials");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="signin"
        id="uncontrolled-tab-example"
        className=" tabss"
      >
        <Tab className="tabone" eventKey="signin" title="Sign In ">
          <form className={classes.root} onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="filled"
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
            <div>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Sign In
              </Button>
            </div>
            <div>
              <button
                onClick={() => {
                  handleForgotPasswordClick();
                }}
              >
                Forgot Password?
              </button>
              {showModal && <ForgotPasswordModal onClose={handleCloseModal} />}
            </div>
          </form>
        </Tab>

        <Tab className="tabone" eventKey="signup" title="Sign Up">
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="filled"
              name="name"
              value={credentials.name}
              onChange={onChange}
              required
            />

            <TextField
              label="Email"
              variant="filled"
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
            <TextField
              label="location"
              variant="filled"
              name="location"
              value={credentials.location}
              onChange={onChange}
              required
            />
            <div>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Form;
