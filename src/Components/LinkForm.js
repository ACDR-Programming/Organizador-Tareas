import React, { useState, useEffect } from "react";
import { db } from "../firebase";

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

  const obtenerEnlace = async (id) => {
    const doc = await db.collection("tareas").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.idActual === "") {
      setValues({ ...initialStateValues });
    } else {
      obtenerEnlace(props.idActual);
    }
  }, [props.idActual]);

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
      <button className="btn btn-primary btn-block">
        {props.idActual === '' ? 'Guardar': 'Actualizar'}
      </button>
    </form>
  );
};

export default LinkForm;
