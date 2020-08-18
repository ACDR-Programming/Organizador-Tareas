import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import {toast} from "react-toastify";

import { db } from "../firebase";

const Links = () => {
  const [task, setTareas] = useState([]);

  const addOrEditTask = async (taskObject) => {
    await db.collection("tareas").doc().set(taskObject);
    toast('Se ha crado una nueva tarea');
  };

  const Delete = async id => {
    if (window.confirm('¿Estas seguro de que quieres eliminar este enlace?')) {
      await db.collection('tareas').doc(id).delete();
      toast('Se ha eliminado una tarea');
    }
  }

  const getTask = async () => {
    db.collection("tareas").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTareas(docs);
    });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="body">
      <div className="col-md-4 p-2">
      <LinkForm addOrEditTask={addOrEditTask} />
      </div>
      <div className="col-me-8 p-2">
        {task.map((tareas) => (
          <div className="card mb-1" key={tareas.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{tareas.titulo}</h4>
                <div>
                  <i className="material-icons text-danger pointer" onClick={()=> Delete(tareas.id)}>close</i>
                </div>

              </div>
              <p>
                <i>{tareas.fecha}</i>
              </p>
              <p>{tareas.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
