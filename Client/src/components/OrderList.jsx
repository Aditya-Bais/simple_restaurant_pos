import React from "react";

const OrderList = (props) => {


  if (props.selectedTable === null) return null;
  console.log(props);
  return (
    <div className="table-responsive-sm">
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Price</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map((items, i) => {
        return (
                <tr>
                  <td>{items.name}</td>
                  <td>{items.price}</td>
                  <td>
                    <button
                      onClick={() => props.onDelete(props.selectedTable, i)}>
                      Remove
                    </button>
                  </td>
                </tr>
             
        );
      })}
      </tbody>
      </table>
    </div>
  );
};

export default OrderList;
