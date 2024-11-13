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

  const second1 = Math.floor(seconds % 10);
  const second2 = Math.floor((seconds / 10) % 10);
  const second3 = Math.floor((seconds / 100) % 10);
  const second4 = Math.floor((seconds / 1000) % 10);
  const second5 = Math.floor((seconds / 10000) % 10);
  const second6 = Math.floor((seconds / 100000) % 10);

  return (
    <div className="container">
      <div className="watch">
        <i className="fa fa-clock"></i>
      </div>
      <SegundosActuales numeroAColocar={second1} />
      <SegundosActuales numeroAColocar={second2} />
      <SegundosActuales numeroAColocar={second3} />
      <SegundosActuales numeroAColocar={second4} />
      <SegundosActuales numeroAColocar={second5} />
      <SegundosActuales numeroAColocar={second6} />
   
    </div>
  );
};

export default Reloj;
