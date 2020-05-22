import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
  const { values, onInputChange, onCheckboxChange, onOrder, errors } = props;

  return (
    <>
      <h2> Build your Pizza:</h2>

      <form onSubmit={onOrder}>
        <p>Enter your name:</p>
        <input
          type="text"
          value={values.name}
          onChange={onInputChange}
          name="name"
        />
        <p>{errors.name}</p>
        <p>Choose size:</p>
        <select onChange={onInputChange} value={values.size} name="size">
          <option value="">-Choose Size-</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <p>Select your toppings:</p>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.papperoni}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Extra Cheese
          <input
            type="checkbox"
            name="extra cheese"
            checked={values.toppings.extracheese}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.toppings.olives}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Chorizo
          <input
            type="checkbox"
            name="chorizo"
            checked={values.toppings.chorizo}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Spinach
          <input
            type="checkbox"
            name="spinach"
            checked={values.toppings.spinach}
            onChange={onCheckboxChange}
          />
        </label>
        <p>Select your sauce:</p>
        <label>
          Regular Sauce
          <input
            type="checkbox"
            name="regular sauce"
            checked={values.toppings.regular}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Spicy Sauce
          <input
            type="checkbox"
            name="spicy sauce"
            checked={values.toppings.spicy}
            onChange={onCheckboxChange}
          />
        </label>
        <p>Special Instructions:</p>
        <input
          type="text"
          name="special instructions"
          onChange={onInputChange}
          value={values.specialInstructions}
        />

        <Link to="/order">
          <button>Submit Order</button>
        </Link>
      </form>
    </>
  );
}
