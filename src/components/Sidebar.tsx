import React, { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleDropdown = (categoryId: number | React.SetStateAction<null>) => {
    if (categoryId === openCategoryId) {
      setOpenCategoryId(null); // Collapse the currently open category if clicked again
    } else {
      setOpenCategoryId(categoryId); // Expand the clicked category
    }
  };

  const categories = [
    {
      id: 1,
      title: "Allopathic Medicines",
      items: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: 2,
      title: "Ayurvedic Medicines",
      items: ["Item 4", "Item 5"],
    },
    {
      id: 3,
      title: "Generic Medicines",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 4,
      title: "Mom & Baby ",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 5,
      title: "Diabetic Care",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 6,
      title: "Pain Relief",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 7,
      title: "Surgical and Dressing ",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 8,
      title: "Skin Care",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 9,
      title: "Hair Care",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 10,
      title: "Sexual Wellness",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 11,
      title: "Covid Essentials",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 12,
      title: "Devices",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 13,
      title: "Intimate Care & Hygiene",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 14,
      title: "Home Care",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 15,
      title: "Fitness & Supplements",
      items: ["Item 6", "Item 7", "Item 8"],
    },
    {
      id: 16,
      title: "Mobility and Support",
      items: ["Item 6", "Item 7", "Item 8"],
    },
  ];

  return (
    <div className="side-panel">
      <div className="panel-title">Categories</div>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <div
              className={`category-header ${
                openCategoryId === category.id ? "open" : ""
              }`}
              onClick={() => toggleDropdown(category.id)}
            >
              {category.title}
              <span className="dropdown-arrow"></span>
            </div>
            {openCategoryId === category.id && (
              <ul className="item-list">
                {category.items.map((item, index) => (
                  <li key={index} className="item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;