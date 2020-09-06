import React from "react";

const OrderButton = props => {
  return (
    <button className="btn btn-danger"
        disabled={
          props.selectedTable === null ||
          props.tableStatusData[props.selectedTable] === false
        }
        onClick={() =>
          props.onAdd(props.name, props.price, props.selectedTable)
        }
      >
        ${props.price} {props.name}
    </button>
  );
};

export default OrderButton;