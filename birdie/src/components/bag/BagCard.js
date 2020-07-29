import React from "react";
import { Link } from "react-router-dom";
const BagCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
        </picture>
        <h3>
          Brand: <span className="card-petname"></span>
        </h3>
  <a href={`bags/${props.bag.id}`}>{props.bag.brand}</a>

      </div>
    </div>
  );
};

export default BagCard;