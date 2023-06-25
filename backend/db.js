require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mdb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetch_data = mongoose.connection.db.collection("products");
    const data = await fetch_data.find({}).limit(50).toArray();

    const main_product = mongoose.connection.db.collection("main_product");
    const catData = await main_product.find({}).toArray();

    global.products = data;
    global.main_product = catData;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mdb;
