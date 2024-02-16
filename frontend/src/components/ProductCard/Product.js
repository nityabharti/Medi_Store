import React from "react";
import "./Product.css";
import { Button } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material";

const Product = () => {
  return (
    <div className="card">
      <div className="off">
        <Button style={{ color: "black" }}>92% off</Button>
        <img
          style={{ paddingTop: 5, paddingRight: 5 }}
          height={25}
          src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
          alt="abc"
        />
      </div>
      <div className="card-img">
        <img
          style={{ width: "50%", height: "" }}
          src="https://5.imimg.com/data5/SELLER/Default/2023/11/360272351/ST/XX/JE/199522718/50-ml-dabur-pudin-hara-liquid.jpg"
        />
      </div>

      <div className="discrip">
        <h3>Pudin Hara</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Product;
