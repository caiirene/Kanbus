import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsJournalMedical, BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item border-start">
              <div className="d-flex justify-content-between">
                <BsJournalMedical className="green-icon"/>
                <h3 className="col-10">{module.name}</h3>
                <AiFillCheckCircle className="green-icon"/>
                <AiOutlinePlus className="gray-icon"/>
                <BsThreeDotsVertical className="gray-icon"/>
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