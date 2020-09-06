import React from "react";
import OrderListContainer from "../containers/OrderListContainer.js";
import ToggleTableContainer from "../containers/ToggleTableContainer.js";

const Details = (props) => {
  var total = 0;
  if (props.selectedTable !== null) {
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price;
    }
  }
  return (
    <div className="panel panel-success">
     <div className="panel-heading">
        <h4>
          {props.selectedTable === null
            ? "No selected Table"
            : "Table #" + props.selectedTable}
        </h4>
        </div>
        <div className="panel-body">
        <ToggleTableContainer />
       
        <h4>{props.tableStatus ? "Bill Total: " + total + "$" : ""}</h4>
      
        <OrderListContainer />
        </div>
      </div>
      
  );
};

export default Details;
