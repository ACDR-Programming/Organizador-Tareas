import React, { useState } from "react";

const LinkForm = (props) => {
  const initialStateValues = {
    titulo: "",
    fecha: "",
    descripcion: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const manejaCambioInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    props.addOrEditTask(values);
    setValues({ ...initialStateValues });
  };

  return (
    <form className="card card-body" onSubmit={enviarDatos}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">title</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el titulo de la tarea"
          name="titulo"
          onChange={manejaCambioInput}
          value={values.titulo}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_invitation</i>
        </div>
        <input
          type="date"
          className="form-control"
          name="fecha"
          onChange={manejaCambioInput}
          value={values.fecha}
        />
      </div>

      <div className="form-group">
        <textarea
          name="descripcion"
          rows="3"
          className="form-control"
          placeholder="Ingrese la descripcion de la tarea"
          onChange={manejaCambioInput}
          value={values.descripcion}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">Guardar</button>
    </form>
  );
};

export default LinkForm;
