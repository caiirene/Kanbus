import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./index.css";
import { BiDotsVerticalRounded } from "react-icons/bi";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div></div>
        <BsFillCheckCircleFill className="green-icon" style={{ paddingRight: '6px' }} />
        <h4 style={{ color: 'green' }}>Published</h4>
        <BiDotsVerticalRounded className="gray-icon" />
      </div>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
        className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger">
        Cancel
      </Link>
      {/* <Link onClick={handleSave}
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success me-2">
        Save
      </Link> */}
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;