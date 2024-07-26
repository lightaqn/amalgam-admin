import React, { useState } from "react";
import "./registerProduct.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiMethods";
import { useDispatch } from "react-redux";

export default function RegisterProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cate, setCate] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCate = (e) => {
    setCate(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers;
    // 1. 'state_changed' observer, called any time in the state changes
    // 2. Error observer, called on failure when
    // 3. Completion observer, called on successful Completion

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get talk progress, including the number of bytes uploaded and the total number of bytes

        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is passed");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on completed
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cate };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="containerHome">
      <Navbar />
      <div className="smContainerHome">
        <Sidebar />
        <div className="registerProduct">
          <h1 className="registerProductTitle">New Product</h1>
          <form className="registerProductForm">
            <div className="registerProductItem">
              <label>Image</label>
              <input
                name="img"
                type="file"
                className="registerProductInput"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="registerProductItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                className="registerProductInput"
                placeholder="Apple AirPods"
                onChange={handleChange}
              />
            </div>
            <div className="registerProductItem">
              <label>Description</label>
              <input
                name="desc"
                type="text"
                className="registerProductInput"
                placeholder="description..."
                onChange={handleChange}
              />
            </div>
            <div className="registerProductItem">
              <label>Price</label>
              <input
                name="price"
                type="number"
                className="registerProductInput"
                placeholder="100"
                onChange={handleChange}
              />
            </div>
            <div className="registerProductItem">
              <label>Categories</label>
              <input
                name="cate"
                type="text"
                className="registerProductInput"
                placeholder="clothes, shoes"
                onChange={handleCate}
              />
            </div>
            <div className="registerProductItem">
              <label>Stock</label>
              <select name="inStock" onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <button onClick={handleClick} className="registerProductButton">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
