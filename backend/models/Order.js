const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  road: {
    type: String,
    required: true,
  },
  house: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("order", OrderSchema);
