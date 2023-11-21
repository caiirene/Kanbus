import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsJournalMedical, BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModules,
  setModule
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const [module, setModule] = useState({});
  const dispatch = useDispatch();


  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button onClick={() => dispatch(updateModule(module))}>Update</button>

        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <input value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item border-start">

            <div className="d-flex justify-content-between">
              <BsJournalMedical className="green-icon" />
              <h3 className="col-8">{module.name}</h3>
              <button
                onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>
              <button
                onClick={() => handleUpdateModule(module._id)}>
                Edit
              </button>

              <AiFillCheckCircle className="green-icon" />
              <AiOutlinePlus className="gray-icon" />
              <BsThreeDotsVertical className="gray-icon" />
            </div>
            <p>{module.description}</p>
            {
              module.lessons && (
                <ul className="list-group list-group-item-secondary me-1">
                  {
                    module.lessons.map((lesson, index) => (
                      <li key={index} className="list-group-item">
                        <h4>{lesson.name}</h4>
                        <p>{lesson.description}</p>
                      </li>
                    ))
                  }
                </ul>
              )
            }
            <button
              onClick={handleAddModule}>
              Add
            </button>
          </li>
        ))
      }
    </ul>
  );
}
export default ModuleList;