import React, { useState, useEffect } from "react";

const Home = (props) => {

  const token = sessionStorage.getItem("birdie-token")

  return (
      <>
    <div className="content">
      <h3>Welcome to Birdie!</h3>
        <h4>- Save all your disc specs.</h4>
        <h4>- Create a bag and edit your discs to save a loadout.</h4>
        <h4>- Save game details.</h4>
        <h4>- Brag about your scores.</h4>
    </div>
    </>
  );
};

export default Home;
