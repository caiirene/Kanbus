import React, { useState } from "react";
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
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

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
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button
                onClick={() => dispatch(setModule(module))}>
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
          </li>
        ))
      }
    </ul>
  );
}
export default ModuleList;