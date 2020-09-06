import React from "react";
import TableButtonContainer from "../containers/TableButtonContainer.js";

const Layout = () => {
  return (
    <div className="panel panel-info">
      <div className="panel-heading">Tables</div>
      <div className="panel-body">
        <div className="row text-center">
          <div className="col-xs-2">
            <TableButtonContainer id={1} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={2} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={3} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={4} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={5} />
          </div>
        </div>
        <div><hr></hr></div>
        <div className="row text-center">
          <div className="col-xs-2">
            <TableButtonContainer id={6} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={7} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={8} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={9} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={10} />
          </div>
          </div>
          <div><hr></hr></div>
          <div className="row text-center">
          <div className="col-xs-2">
            <TableButtonContainer id={11} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={12} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={13} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={14} />
          </div>
          <div className="col-xs-2">
            <TableButtonContainer id={15} />
          </div>
          </div>
          <div><hr></hr></div>
        

      

      </div>
    </div>
  );
};

export default Layout;
