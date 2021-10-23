import React from "react";
import stitch from "./content/stitch.png";
import bambi from "./content/bambi.jpg";
export const App = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <h1>Hello from React DOM!!!</h1>
      <label htmlFor="name">Nombre: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={stitch} alt="pikachu" />
      <img src={bambi} alt="bambi" />
    </div>
  );
};
