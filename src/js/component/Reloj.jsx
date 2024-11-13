import { useState, useEffect } from "react";
import React from "react";
import SegundosActuales from "./SegundosActuales";

const Reloj = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const tiempo = setInterval(() => {
      setSegundos((segundosAnteriores) => segundosAnteriores + 1);
    }, 1000);
    return () => clearInterval(tiempo);
  }, []);

  const segundo1 = Math.floor(segundos % 10);
  const segundo2 = Math.floor((segundos / 10) % 10);
  const segundo3 = Math.floor((segundos / 100) % 10);
  const segundo4 = Math.floor((segundos / 1000) % 10);""
  const segundo5 = Math.floor((segundos / 10000) % 10);
  const segundo6 = Math.floor((segundos / 100000) % 10);

  return (
    <div className="container">
      <div className="watch">
        <i className="fa fa-clock"></i>
      </div>
      <SegundosActuales numeroAColocar={segundo6} />
      <SegundosActuales numeroAColocar={segundo5} />
      <SegundosActuales numeroAColocar={segundo4} />
      <SegundosActuales numeroAColocar={segundo3} />
      <SegundosActuales numeroAColocar={segundo2} />
      <SegundosActuales numeroAColocar={segundo1} />
   
    </div>
  );
};

export default Reloj;
