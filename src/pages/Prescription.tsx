import React, { useState } from "react";
import "../styles/Prescription.css";

const Prescription = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleNameChange = (event) => {
    setImageName(event.target.value);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", imageName);

    try {
      const response = await fetch(
        "http://localhost:5000/api/prescriptions/images",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUploadStatus(data.message);
        setImage(null);
        setImageName("");
      } else {
        throw new Error(data.error || "Error uploading image");
      }
    } catch (error) {
      console.error(error);
      setUploadStatus("Error uploading image");
    }
  };

  return (
    <div className="mainsec">
      <div className="maindiv">
        <h2 className="maintext">Upload your Prescription</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          value={imageName}
          onChange={handleNameChange}
          placeholder="Image Name"
        />
        <br />
        <button className="uploadbtn" onClick={handleUpload}>
          Upload
        </button>
        <p>{uploadStatus}</p>
      </div>
    </div>
  );
};

export default Prescription;
