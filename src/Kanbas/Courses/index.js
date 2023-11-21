import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  // const URL = "http://five610-node-caiirene.onrender.com/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  const [empty, kanbas, coursess, id, screen] = pathname.split("/");

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);



  return (
    <div>

      {/* header */}
      <div className="container-fluid expand">
        <div className="row align-items-center expand">
          <div className="col-auto">
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#courseNavigation">
              <i className="fas fa-bars ps-4 pt-4 fa-lg text-danger"></i>
            </button>
          </div>
          <div className="col ps-0">
            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
              <ol className="breadcrumb pt-3">
                <li className="breadcrumb-item">
                  <a href="#" className="text-danger text-decoration-none">{courseId}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {`Courses ${course.name} > ${screen}`}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-light border border-secondary-subtle float-end">
              <i className="fa-solid fa-glasses me-2"></i>Student View
            </button>
          </div>
        </div>
        <hr/>
      </div>


      {/* Main Content */}
      {/* <h1>Courses {course.name} / {screen}</h1>
      <hr /> */}
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "280px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;

