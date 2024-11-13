import {useState, useEffect} from "react";
import React from 'react';

const Reloj = () => {
const [segundos, setSegundos] = useState(0);

useEffect(() =>{
  const tiempo = setTiempo(() => {
    setSegundos((segundosAnteriores) => segundosAnteriores +1);
  }, 1000);
  
}
)
 
}

  return (
    <div className="container">
      <div className="watch">
        <i className="fa fa-clock"></i>
      </div>
      <div className="s6">S6</div>
      <div className="s5">S5</div>
      <div className="s4">S4</div>
      <div className="s3">S3</div>
      <div className="s2">S2</div>
      <div className="s1">S1</div>
    </div>
  );
};

export default Reloj;
