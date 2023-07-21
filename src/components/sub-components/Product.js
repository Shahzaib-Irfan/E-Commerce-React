import React from "react";

const Product = ({ Image, name, price, description }) => {
  console.log(name);
  return (
    <div className="col">
      <div className="card">
        <center>
          <img
            src={Image}
            className="card-img-top"
            alt="product1"
            style={{ height: "200px", width: "200px" }}
          />
        </center>
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: "#100F3D",
              fontFamily: "bahnschrift",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {name}
          </h5>
          <div style={{ textAlign: "center", marginTop: "-10px" }}>
            ⭐⭐⭐⭐⭐
          </div>
          <h5
            style={{
              color: "#F57224",
              textAlign: "center",
              fontFamily: "bahnschrift",
              fontWeight: "bold",
            }}
          >
            {price}
          </h5>
          <p
            className="card-text"
            style={{ fontFamily: "bahnschrift", textAlign: "justify" }}
          >
            {description}
          </p>
          <center>
            <button
              className="btn btn-outline-light"
              style={{
                fontFamily: "bahnschrift",
                color: "white",
                backgroundColor: "#F57224",
              }}
            >
              Buy Now
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Product;
