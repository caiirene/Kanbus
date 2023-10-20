import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Button from "./button";
import './index.css';
import { BsFillPencilFill, BsJournalMedical, BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="away-from-edge">
      {/* <h2>Assignments for course {courseId}</h2> */}
      <Button />
      <div className="list-group">
        <ul class="list-group border-start border-5 border-success ">
          <div className="d-flex justify-content-between">
            <BsThreeDotsVertical className="gray-icon" />
            <h3 className="col-8">Assignments</h3>
            <button className="no-radio">40% of Total</button>
            <AiOutlinePlus className="gray-icon" />
            <BsThreeDotsVertical className="gray-icon" />
          </div>
          <div className="list-group">
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item">
                <div className="d-flex justify-content-between list-group-item-secondary">
                  <BsFillPencilFill className="green-icon" />
                  <h3 className="col-8">{assignment.title}</h3>
                  <AiFillCheckCircle className="green-icon" />
                  <BsThreeDotsVertical className="gray-icon" />
                </div>

              </Link>
            ))}
          </div>
        </ul>
      </div>

    </div>
  );
}
export default Assignments;