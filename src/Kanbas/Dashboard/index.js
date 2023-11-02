import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import db from "../Database";
import { AiOutlineNotification } from "react-icons/ai";
import { useState } from "react";


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //   {
  //     ...course,
  //     _id: new Date().getTime()
  //   }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };


  return (
    <div className="wd-dashboard-container">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <hr />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


      <h2>Published Courses ({courses.length})</h2>
      <div className="row d-flex justify-content-start flex-wrap">
        {courses.map((course, index) => (

          <div key={course._id} className="col-auto ms-5 mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card h-100">
              <div style={{ backgroundColor: "#a183d7", height: "150px" }}>
                <i className="fa-solid fa-ellipsis-vertical float-end me-4 pt-4 text-white fa-lg"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>

                <p className="card-text">{course.number}<br />
                  <small>{course.startDate}</small><br />
                  <small>{course.endDate}</small><br />
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>

                </p>
                <AiOutlineNotification className="float-end me-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

