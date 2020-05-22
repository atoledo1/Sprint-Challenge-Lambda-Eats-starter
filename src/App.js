import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Order from "./components/order";
import PizzaForm from "./components/pizzaform";
import axios from "axios";
import formSchema from "./validation/formSchema";
import * as yup from "yup";

const initalFormValues = {
  name: "",
  size: "",
  toppings: {
    pepperoni: false,
    canadianBacon: false,
    spicyChicken: false,
    sausage: false,
  },
  specialInstructions: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  specialInstructions: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErros] = useState(initialFormErrors);

  const onOrder = (event) => {
    event.preventDefault();
    const newPizzaOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(
        (topping) => formValues.toppings[topping] === true
      ),
      specialInstructions: formValues.specialInstructions,
    };

    postPizzaOrder(newPizzaOrder);
  };

  const postPizzaOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFormValues(initalFormValues);
      });
  };
  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErros({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErros({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const onCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      },
    });
  };

  return (
    <div className="main">
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/PizzaForm">
            {" "}
            <hr></hr>Order your Pizza!
          </Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/PizzaForm">
          <PizzaForm
            values={formValues}
            onInputChange={onInputChange}
            onOrder={onOrder}
            onCheckboxChange={onCheckboxChange}
            errors={formErrors}
          />
        </Route>
        <Route exact path="/order">
          <Order values={formValues} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
