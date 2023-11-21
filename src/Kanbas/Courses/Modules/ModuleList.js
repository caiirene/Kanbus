// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import db from "../../Database";
// import { BsJournalMedical, BsThreeDotsVertical } from "react-icons/bs";
// import "./index.css";
// import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addModule,
//   deleteModule,
//   updateModule,
//   setModules,
//   setModule
// } from "./modulesReducer";
// import { findModulesForCourse, createModule } from "./client";
// import * as client from "./client";


// function ModuleList() {
  
//   const handleDeleteModule = (moduleId) => {
//     client.deleteModule(moduleId).then((status) => {
//       dispatch(deleteModule(moduleId));
//     });
//   };
//   const handleUpdateModule = async () => {
//     const status = await client.updateModule(module);
//     dispatch(updateModule(module));
//   };



//   const { courseId } = useParams();
//   useEffect(() => {
//     findModulesForCourse(courseId)
//       .then((modules) =>
//         dispatch(setModules(modules))
//       );
//   }, [courseId]);
//   const handleAddModule = () => {
//     createModule(courseId, module).then((module) => {
//       dispatch(addModule(module));
//     });
//   };

//   const modules = useSelector((state) => state.modulesReducer.modules);
//   const [module, setModule] = useState({});
//   const dispatch = useDispatch();


//   return (
//     <ul className="list-group">
//       <li className="list-group-item">
//         <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
//         <button onClick={() => dispatch(updateModule(module))}>Update</button>

//         <input value={module.name}
//           onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
//         />
//         <input value={module.description}
//           onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
//         />
//       </li>

//       {modules
//         .filter((module) => module.course === courseId)
//         .map((module, index) => (
//           <li key={index} className="list-group-item border-start">

//             <div className="d-flex justify-content-between">
//               <BsJournalMedical className="green-icon" />
//               <h3 className="col-8">{module.name}</h3>
//               <button
//                 onClick={() => handleDeleteModule(module._id)}>
//                 Delete
//               </button>
//               <button
//                 onClick={() => handleUpdateModule(module._id)}>
//                 Edit
//               </button>

//               <AiFillCheckCircle className="green-icon" />
//               <AiOutlinePlus className="gray-icon" />
//               <BsThreeDotsVertical className="gray-icon" />
//             </div>
//             <p>{module.description}</p>
//             {
//               module.lessons && (
//                 <ul className="list-group list-group-item-secondary me-1">
//                   {
//                     module.lessons.map((lesson, index) => (
//                       <li key={index} className="list-group-item">
//                         <h4>{lesson.name}</h4>
//                         <p>{lesson.description}</p>
//                       </li>
//                     ))
//                   }
//                 </ul>
//               )
//             }
//             <button
//               onClick={handleAddModule}>
//               Add
//             </button>
//           </li>
//         ))
//       }
//     </ul>
//   );
// }
// export default ModuleList;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaGripVertical,
  FaEllipsisVertical,
  FaCaretRight,
  FaCircleCheck,
  FaCaretDown,
  FaPlus,
} from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
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
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  return (
    <div className="list-group">
      <div className="list-group-item d-flex align-items-start">
        <div className="flex-grow-1 me-3">
          <input
            className="form-control mb-3 w-75"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />

          <textarea
            className="form-control w-75 mb-2"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
        <div className="column mt-1">
          <button
            className="btn btn-primary me-1"
            onClick={() => handleUpdateModule()}
          >
            Update
          </button>
          <button
            className="btn btn-success"
            onClick={handleAddModule}
          >
            Add
          </button>
        </div>
      </div>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-secondary align-items-center mb-4"
          >
            <div style={{ float: "left" }} className="mt-4">
              <FaGripVertical className="mb-1 mb-5" />
              <FaCaretRight className="mb-1 me-2 mb-5" />
            </div>
            <div style={{ display: "inline-block" }} className="mt-3">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </div>

            <div style={{ float: "right" }} className="mt-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "5px" }}>
                  <FaCircleCheck className="text-success" />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <FaCaretDown className="me-3" />
                </div>
                <div style={{ marginRight: "10px" }}>
                  <FaPlus className="me-3" />
                </div>
                <div>
                  <FaEllipsisVertical />
                </div>
              </div>
              <div style={{ clear: "both", marginTop: "45px" }}>
                <button
                  className="btn btn-danger me-1"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default ModuleList;