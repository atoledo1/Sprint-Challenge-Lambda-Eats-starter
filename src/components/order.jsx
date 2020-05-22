import React from "react";
import * as yup from "yup";

export default function Order(props) {
  return (
    <div>
      <h2> Yay! Your pizza is on its way!</h2>
      <h3>Order Information</h3>
      <p> Name:{props.values.name}</p>
      <p> Size:{props.values.size}</p>
      <p>
        {" "}
        Toppings:
        {Object.keys(props.values.toppings)
          .filter((topping) => {
            return props.values.toppings[topping];
          })
          .toString()}
      </p>
      <p> Special Instructions:{props.values.specialInstructions}</p>
    </div>
  );
}
