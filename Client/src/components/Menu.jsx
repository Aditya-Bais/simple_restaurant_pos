import React from "react";
import OrderButtonContainer from "../containers/OrderButtonContainer.js";

const Menu = () => {
  return (
    <div className="panel panel-danger">
      <div className="panel-heading">Menu</div>
      <div className="panel-body">
        <ul className="nav nav-tabs">
          <li className="active">
            <a data-toggle="tab" href="#home">
              Entrée
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu1">Drinks</a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu2">
              Mains
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu3">
              Desserts
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
            <h3>Entrée</h3>
            <OrderButtonContainer name="Spring Rolls" price={2} />
            <OrderButtonContainer name="Salad" price={3} />
            <OrderButtonContainer name="French Fries" price={2} />
            <OrderButtonContainer name="Soup" price={2} />
          </div>
          <div id="menu1" className="tab-pane fade">
            <h3>Drinks</h3>
            <OrderButtonContainer name="Orange Juice" price={1} />
            <OrderButtonContainer name="Tea" price={1} />
            <OrderButtonContainer name="Water" price={0} />
            <OrderButtonContainer name="Coffee" price={2} />
          </div>
          <div id="menu2" className="tab-pane fade">
            <h3>Mains</h3>
            <OrderButtonContainer name="Donut" price={1} />
            <OrderButtonContainer name="Chicken Burger" price={5} />
            <OrderButtonContainer name="Pizza" price={3} />
            <OrderButtonContainer name="Chicken Steak" price={4} />
            <OrderButtonContainer name="Taco" price={7} />
            <OrderButtonContainer name="Vegan Burger" price={3} />
            <OrderButtonContainer name="Pasta" price={3} />
            <OrderButtonContainer name="Lasagna" price={3} />
            <OrderButtonContainer name="Margherita" price={4} />
          </div>
          <div id="menu3" className="tab-pane fade">
            <h3>Desserts</h3>
            <OrderButtonContainer name="Ice Cream" price={3} />
            <OrderButtonContainer name="Waffles" price={3} />
            <OrderButtonContainer name="Cake Slice" price={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
