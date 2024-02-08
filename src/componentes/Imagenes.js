import React, { useState } from 'react';
import '../stylesheet/Imagenes.css';

function Imagenes(props) {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <>
      <div 
        className='contenedor-cenec'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={props.enlace} target="_blank" rel="noopener noreferrer">
          <div
            className='imagen-cenec'
            style={{ backgroundImage: `url(${require(`../imagenes/cenec-${props.imagen}.jpg`)})` }}
          >
          </div>
        </a>
      </div>
      <div 
        className='imagen-texto-oculto'
        style={{ opacity: showText ? 1 : 0 }} // Controla la visibilidad del texto con la opacidad
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>{props.titulo}</div>
        <div><br></br></div>
        <div>{props.texto}</div>
      </div>
    </>
  );
}

export default Imagenes;

