require("dotenv").config();
const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const user = require("../models/User_model");

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtsecret = process.env.JWT_SECRET_KEY;

// email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// route for send password

router.post("/sendpasswordlink", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(401).json({ status: 401, message: "Enter Your Email" });
  }

  try {
    const userfind = await user.findOne({ email: email });
    // token generate for reset password
    const token = jwt.sign({ _id: userfind._id }, jwtsecret, {
      expiresIn: "1d",
    });

    const setusertoken = await user.findByIdAndUpdate(
      { _id: userfind._id },
      { verifytoken: token },
      { new: true }
    );

    if (setusertoken) {
    }

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending email for Password Reset",
      text: `This Link Valid For 2 MINUTES http://localhost:3000/forgotpassword/${userfind.id}/${setusertoken.verifytoken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
        res.status(401).json({ status: 401, message: "email not send" });
      } else {
        console.log("Email sent to your mail", info.response);
        res
          .status(201)
          .json({ status: 201, message: "Email sent to your mail succsfully" });
      }
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

// verify user for forget password
router.get("/forgotpassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  try {
    const authenticateUser = await user.findOne({
      _id: id,
      verifytoken: token,
    });

    const verifyToken = jwt.verify(token, jwtsecret);

    if (authenticateUser && verifyToken._id) {
      res.status(201).json({ status: 201, authenticateUser });
    } else {
      res.status(501).json({ status: 501, message: "User is not exist" });
    }
  } catch (error) {
    res.status(501).json({ status: 501, error });
  }
});

//  Change Password

router.post("/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  const { password } = req.body;

  try {
    const authenticateUser = await user.findOne({
      _id: id,
      verifytoken: token,
    });

    const verifyToken = jwt.verify(token, jwtsecret);

    if (authenticateUser && verifyToken._id) {
      const salt = await bcrypt.genSalt(10);
      let newpassword = await bcrypt.hash(req.body.password, salt);

      const setnewuserpass = await user.findByIdAndUpdate(
        { _id: id },
        { password: newpassword }
      );

      setnewuserpass.save();
      res.status(201).json({ status: 201, setnewuserpass });
    } else {
      res.status(501).json({ status: 501, message: "user not exist" });
    }
  } catch (error) {
    res.status(501).json({ status: 501, error });
  }
});

module.exports = router;
