require("dotenv").config();
const express = require("express");
const router = express.Router();

const fetchuser = require("../middleware/fetchUser");
const Item = require("../models/card");

// Route1: Get all product using GET login required

router.get("/fetchproduct", fetchuser, async (req, res) => {
  try {
    const item = await Item.find({ user: req.user.id });
    res.json(item);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route:2 add a item into using POST login required

router.post(
  "/addproduct",
  fetchuser,

  async (req, res) => {
    try {
      const { imgSrc, productName, subProduct, totalPrice, qty } = req.body;

      const item = new Item({
        imgSrc,
        productName,
        subProduct,
        totalPrice,
        qty,
        user: req.user.id,
      });
      const savedNote = await item.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// Route:3  Delete a Existing item  using  DELETE"/api/cards/deleteproduct" login  required
router.delete(
  "/deleteproduct/:id",
  fetchuser,

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).send("not found");
      }
      //Allow deletion only if  user owns this note
      if (item.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      item = await Item.findByIdAndDelete(req.params.id);
      res.json({ Success: "Card has been deleted", item: item });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
