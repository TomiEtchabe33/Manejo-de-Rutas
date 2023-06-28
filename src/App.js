import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Creacion from "./pages/creacion";

const ListadeTareas = () => {
  const tareas = ['Pagina TP N°10', 'Pagina Kayak', 'Pagina ReactJSX'];

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((task, index) => (
          <li key={index}>{task}</li>
        ))}<br></br>
        <li>
          <Link to="/Creacion">Crear Tarea</Link>
        </li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        { }
        <Route path="/" element={<ListadeTareas />} />
        { }
        <Route exact path="/Creacion" Component={Creacion}/>
      </Routes>
    </Router>
  );
};

export default App;
