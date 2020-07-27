import React from "react";

const BagCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
        </picture>
        <h3>
          Brand: <span className="card-petname">Doodles</span>
        </h3>
  <p>{props.brand}</p>
      </div>
    </div>
  );
};

export default BagCard;