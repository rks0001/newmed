const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const mdb = require("./db");

mdb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/cards", require("./Routes/cards"));
app.use("/api/display", require("./Routes/display"));
app.use("/api/mail", require("./Routes/mail"));
app.use("/api/prescriptions", require("./Routes/prescriptions"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
