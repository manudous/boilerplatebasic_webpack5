import React from "react";

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
    </div>
  );
};
