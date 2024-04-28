import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img
          src="images/website_Images.webp"
          alt="images"
          className="img-fluid"
        />
      </div>
      <div className="container my-5">
        <div className="row p-3 my-3">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Simple Calculator</h5>
                <h6 className="card-subtitle mb-2 text-muted text-capitalize">
                  <p>We are using useState Hook in this small Project</p>
                  <p>only add sub mul devide feature.</p>
                </h6>

                <p className="card-text"></p>
                <Link
                  to="/calculator"
                  className="card-link btn btn-outline-dark"
                >
                  Calculator
                </Link>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Crypto Data </h5>
                <h6 className="card-subtitle mb-2 text-muted text-capitalize">
                  <p>Featching Crypto Data from Api</p>
                  <p>We are using useEffect Hook in this small Project</p>
                </h6>
                <p className="card-text"></p>
                <Link to="/crypto" className="card-link btn btn-outline-dark">
                  Crypto Api
                </Link>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Todo App </h5>
                <h6 className="card-subtitle mb-2 text-muted text-capitalize">
                  storing Todo task in Local Storage
                  <p>
                    Simple web App to store data in localStorage AND PERFORM
                    EDIT DELETE ADD Function
                  </p>
                </h6>

                <p className="card-text"></p>
                <Link to="/todo" className="card-link btn btn-outline-dark">
                  Todo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
