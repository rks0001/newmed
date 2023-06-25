import React from "react";
import "../styles/CategoriesMain.css";
import Sidebar from "../components/Sidebar";
import Catcard from "../components/Catcard";

import { useEffect, useState } from "react";

const CategoriesMain = () => {
  const [medicineCat, setmedicineCat] = useState([]);
  const [product, setproduct] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "http://localhost:5000/api/display/productdata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();

    setproduct(response[0]);
    setmedicineCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="maindivone">
        <div className="leftpanel">
          <Sidebar />
        </div>
        <div className="rightpanel">
          <div className="categories">
            <div className="container">
              {medicineCat?.length !== 0
                ? medicineCat?.map((data) => {
                    return (
                      <div className="row mb-3">
                        <div key={data._id} className="fs-3 m-3">
                          {data.mainProductCategory}
                        </div>
                        <hr />
                        {product?.length !== 0 ? (
                          product
                            ?.filter(
                              (item) =>
                                item.mainProductCategory ===
                                data.mainProductCategory
                            )

                            .map((filterItems) => {
                              return (
                                <div
                                  key={filterItems._id}
                                  className="col-12 col-md-6 col-lg-3  mx-2 mt-4"
                                >
                                  <Catcard
                                    productName={
                                      filterItems.mainProductCategory
                                    }
                                    subProduct={filterItems.productName}
                                    imgSrc={filterItems.productImages[0]}
                                    mrp={filterItems.MRP}
                                  />
                                </div>
                              );
                            })
                        ) : (
                          <div>No such data found</div>
                        )}
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesMain;
