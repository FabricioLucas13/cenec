import React from 'react';
import Imagenes from '../componentes/Imagenes';
import imagenesDatos from '../data/imagenesDatos.json';

function Inicio() {
  return (
    <div className='contenedor-principal'> {/* Aplica la clase aquí */}
        {imagenesDatos.map((imagen, index) => (
          <Imagenes
            key={index}
            nombre={imagen.nombre}
            imagen={imagen.nombre}
            titulo={imagen.titulo}
            texto={imagen.texto}
            enlace={imagen.enlace}
          />
        ))}
    </div>
  );
}

export default Inicio;
