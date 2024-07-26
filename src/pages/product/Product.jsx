import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { PublishTwoTone } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { userCall } from "../../urlCalls";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pMetrics, setPMetrics] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getProductMetrics = async () => {
      try {
        const res = await userCall.get("orders/earning/pdtid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((unit) =>
          setPMetrics((prev) => [
            ...prev,
            { name: MONTHS[unit._id - 1], Sales: unit.total },
          ])
        );
      } catch (err) {}
    };
    getProductMetrics();
  }, [productId, MONTHS]);

  return (
    <div className="containerHome">
      <Navbar />
      <div className="smContainerHome">
        <Sidebar />

        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/registerProduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={pMetrics}
                title="Sales Performance Analytics"
                grid
                dataKey="Sales"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoKey">{product._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoKey">123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">in stock:</span>
                  <span className="productInfoKey">{product.inStock}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder={product.title} />
                <label>Product Description</label>
                <input type="text" placeholder={product.desc} />
                <label>Price</label>
                <input type="text" placeholder={product.price} />
                <label>In Stock</label>
                <select name="inStock" id="inStock">
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src={product.img} alt="" className="productUploadImg" />
                  <label for="file">
                    <PublishTwoTone className="productUploadIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
