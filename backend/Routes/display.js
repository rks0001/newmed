const express = require("express");
const router = express.Router();

router.post("/productdata", async (req, res) => {
  try {
    res.send([global.products, global.main_product]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
