import React from "react";
import Mensaje from "./Mensaje";

const Descripcion = () => {
  return <p>Esta es la app del curso fullstack</p>;
};

function App() {
  return (
    <div className="app">
      <Mensaje msg="Estamos trabajando" colores={'red'}></Mensaje>
      <Mensaje msg="en un curso" colores={'blue'}></Mensaje>
      <Mensaje msg=" de react" colores={'gray '}></Mensaje>
      <Descripcion></Descripcion>
    </div>
  );
}

export default App;
