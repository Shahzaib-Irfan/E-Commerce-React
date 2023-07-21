import React from "react";
import Cart from "../assets/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#100f3d" }}
    >
      <div className="container-fluid">
        <img
          src={Cart}
          alt="Cart"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <a
          className="navbar-brand"
          href="/"
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "bahnschrift",
          }}
        >
          E-Commerce Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="products"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="Cart"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="Contactus"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <a className="nav-link" href="Register">
            <button
              className="btn btn-outline-light"
              style={{
                fontFamily: "bahnschrift",
                marginRight: "10px",
                marginTop: "10px",
              }}
            >
              Register
            </button>
          </a>
          <a className="nav-link" href="Login">
            <button
              className="btn btn-outline-light"
              style={{ fontFamily: "bahnschrift", marginTop: "10px" }}
            >
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
