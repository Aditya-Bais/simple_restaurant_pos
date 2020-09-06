import React from "react";

const TableButton = props => {
  return ( 
      <button className="btn btn-primary btn-lg"
        onClick={() => props.onSelect(props.id)}
        style={{"backgroundColor": props.tableStatusData[props.id] ? "lightgrey" : null}}>
        {props.id}
      </button>
     
   
  );
};

export default TableButton;
