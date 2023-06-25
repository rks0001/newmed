// import "../styles/Catcard.css";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";



// const Catcard = (props: any) => {
//   const [qty, setQty] = useState(1);
//   return (
//     <>
//       <Card className="card mt-3" style={{ width: "18rem", maxHeight: "500px" }}>
//         <Card.Img className="cardimg" variant="top" src={props.imgSrc} style={{ height: "200px", objectFit: "fill" }} />
//         <Card.Body>
//           <Card.Title>{props.subProduct}</Card.Title>
//           <Card.Text>{props.productName}</Card.Text>
         
      
//           <div className="container w-100">
//           <select
//               className="m-2 h-100  bg-success rounded"
//               onChange={(e) => setQty(e.target.value)}
//             >
//               {Array.from(Array(6), (e, i) => {
//                 return (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 );
//               })}
//             </select>
//             <Card.Text className="d-inline h-100 fs-5">MRP:{props.mrp}</Card.Text>
//           </div>
//           <hr />
//           <Button
//             className="btn btn-success justify-center ms-2"
            
//   >
//             Add to cart
//           </Button>
//         </Card.Body>
        
//       </Card>
//     </>
//   );
// };

// export default Catcard;



// require("dotenv").config();
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// const mdb = async () => {
//   await mongoose.connect(
//     process.env.DB_URI,
//     { useNewUrlParser: true },
//     async (err, result) => {
//       if (err) console.log("...", err);
//       else {
//         console.log("connected");
//         const fetch_data = await mongoose.connection.db.collection("products");
//         fetch_data.find({}).toArray(async function (err, data) {
//           const main_product = await mongoose.connection.db.collection(
//             "main_product"
//           );
//           main_product.find({}).toArray(function (err, catData) {
//             if (err) console.log("...", err);
//             else {
//               global.products = data;
//               global.main_product = catData;
//               console.log(global.products);
//             }
//           });
//         });
//       }
//     }
//   );
// };

// module.exports = mdb;

