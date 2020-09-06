import React from "react";


const Overview = (props) => {
  var numTables = 0;
  for (let i = 1; i < props.tableStatusData.length; i++) {
    numTables += props.tableStatusData[i];
  }
return (
<div className="container bg-faded">

    <h1 className="text-center">Zubi Restaurant</h1> 
    
    <hr/>
  
   
     
    <div className="row">
        <div className="col-xs-6">
            <div className="center-block well text-center" >
            Occupied Tables: {numTables}/15
            </div>
        </div>
        <div className="col-xs-6">
            <div className="center-block well text-center" >
            Earned Money: ${props.moneyEarned}
            </div>
            
        </div>   
    </div>
    <div className="kjs">
    <form action="/pos/main/addmoney" method='POST' >
      <input type='hidden' value={props.moneyEarned} name='addmoney'/>
    <input type="submit" value="Save and Logout"></input>
    </form>
    </div>
  </div>
  
  );
};

export default Overview;
