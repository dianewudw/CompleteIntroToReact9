import React from "react";
import { createRoot } from "react-dom/client";


const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Americano Abomination",
      description: "Sliced Proscuitto, Pineapple, Mozzarella, Arugula",
    }),
    React.createElement(Pizza, {
      name: "The Brunching Brit",
      description: "Back Bacon, Blood Sausage, Baked Beans, Egg",
    }),
    React.createElement(Pizza, {
      name: "The Chinese Celebrity",
      description: "Chicken, peanut sauce, bean sprouts, scallions and cilantro",
    }),
    React.createElement(Pizza, {
      name: "The Illustrious Italian",
      description: "Mortadella, Pistachio, Basil, Burrata, Truffle Oil",
    }),
    React.createElement(Pizza, {
      name: "The Mexican Mija",
      description: "Chorizo, roasted corn, tomatilla, avocado, hot honey, egg",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container)
root.render(React.createElement(App));
