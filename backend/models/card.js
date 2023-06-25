const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  imgSrc: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  subProduct: {
    type: String,
    required: true,
  },

  totalPrice: {
    type: String,
    required: true,
  },
  qty: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
