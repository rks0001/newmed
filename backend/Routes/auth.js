require("dotenv").config();
const express = require("express");
const router = express.Router();
const user = require("../models/User_model");

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtsecret = process.env.JWT_SECRET_KEY;

const fetchuser = require("../middleware/fetchUser");

//Route 1: Create a user using POST "/api/auth/" doesn't require Authentication

router.post(
  "/creatuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    let customer = await user.findOne({ email: req.body.email });
    if (customer) {
      return res
        .status(400)
        .json({ error: "Sorry a user with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    let securePaaword = await bcrypt.hash(req.body.password, salt);
    // create a new user
    try {
      customer = await user.create({
        name: req.body.name,
        password: securePaaword,
        email: req.body.email,
        location: req.body.location,
      });

      const data = {
        customer: {
          id: customer.id,
        },
      };

      const authToken = jwt.sign(data, jwtsecret);

      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 2: Authenticate a user using: POST "/api/auth/login"

router.post(
  "/loginuser",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],

  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let customer = await user.findOne({ email });
      if (!customer) {
        success = false;
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }
      const passCompare = await bcrypt.compare(password, customer.password);
      if (!passCompare) {
        success = false;
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }

      const data = {
        customer: {
          id: customer.id,
        },
      };

      const authToken = jwt.sign(data, jwtsecret);
      success = true;

      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3:Get loggedin user details using: POST "/api/auth/getuser" login required

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const customer = await user.findById(userId).select("-password");
    res.send(customer);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
