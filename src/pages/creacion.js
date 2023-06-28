import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearTareas = () => {
  const [nombreTarea, setNombreTarea] = useState('');
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const navigate = useNavigate();

  const handleNombreChange = (event) => {
    setNombreTarea(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcionTarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombreTarea.trim() === '') {
      alert('Por favor, ingresa un nombre para la tarea.');
      return;
    }

    console.log('Nombre de la tarea:', nombreTarea);
    console.log('Descripción de la tarea:', descripcionTarea);

    setNombreTarea('');
    setDescripcionTarea('');

    navigate(`/TareaCreada/${nombreTarea}/descripcion=${descripcionTarea}`);
  };

  return (
    <div>
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de la tarea:
          <input
            type="text"
            value={nombreTarea}
            onChange={handleNombreChange}
          />
        </label>
        <br />
        <label>
          Descripción de la tarea:
          <input
            type="text"
            value={descripcionTarea}
            onChange={handleDescripcionChange}
          />
        </label>
        <br />
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CrearTareas;
