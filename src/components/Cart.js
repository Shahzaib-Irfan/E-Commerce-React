import React from "react";
import Pro2 from "../assets/pro2.png";
const Cart = () => {
  return (
    <>
      <div>
        <h2
          style={{
            fontFamily: "bahnschrift",
            color: "#100f3d",
            marginTop: "40px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Your Add to Cart
        </h2>
      </div>

      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card mb-4">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img
                      src={Pro2}
                      className="img-fluid"
                      alt="Generic placeholder image"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Name</p>
                      <p className="lead fw-normal mb-0">Iphone</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Color</p>
                      <p className="lead fw-normal mb-0">
                        <i
                          className="fas fa-circle me-2"
                          style={{ color: "#fdd8d2" }}
                        ></i>
                        Red
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">350,999 Rs</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">350,999 Rs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-5">
              <div className="card-body p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">350,999 Rs</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-light btn-lg me-2">
                Continue shopping
              </button>
              <button
                type="button"
                className="btn btn-lg"
                style={{ backgroundColor: "#f57224", color: "white" }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
