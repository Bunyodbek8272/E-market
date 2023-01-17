import React from "react";
import bg from "../images/bg6.jpeg";
import "../styles/home.scss";
import Porducts from "./Porducts";
const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0 corner-0">
        <img src={bg} className="card-img banner__img" alt="BG" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRANDS</p>
          </div>
        </div>
      </div>
      <Porducts />
    </div>
  );
};

export default Home;
