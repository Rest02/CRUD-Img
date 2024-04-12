import React, { useState } from "react";
import { postImage } from "../api/imgApi";

function FileUpload() {
  const [file, setFile] = useState([]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleupload = async() => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await postImage(formData);
      console.log(response)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleupload}>Upload</button>
    </div>
  );
}

export default FileUpload;
