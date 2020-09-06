import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import Layout from "./Layout.jsx";
import Menu from "./Menu.jsx";

const Body = () => {
  return (
  <div className="container">
  <div className="row text-center">
    <div className="col-sm-4">
      <Layout />
    </div>
    <div className="col-sm-4">
    <Menu />
    </div>
    <div className="col-sm-4">
    <DetailsContainer />
    </div>
  </div>
</div>


  );
};

export default Body;
