import React from 'react';

const TareaCreada = ({ nombreTarea, descripcionTarea }) => {
  return (
    <div>
      <h1>Tarea Creada:</h1>
      <p>{nombreTarea}</p>
      <h2>Descripción:</h2>
      <p>{descripcionTarea}</p>
    </div>
  );
};

export default TareaCreada;
