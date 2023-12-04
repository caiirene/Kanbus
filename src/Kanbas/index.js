import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import UserTable from "../users/table";

function Kanbas() {

  const [courses, setCourses] = useState([]);
  // const URL = "http://five610-node-caiirene.onrender.com/api/courses";
  const API_BASE = "https://five610-node-caiirene.onrender.com/api" || process.env.REACT_APP_API_BASE || "http://localhost:4000/api" || "https://five610-node-caiirene.onrender.com/api";
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);



  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addCourse  = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    });
  };


  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
                <Dashboard courses={courses} course={course}
                  setCourse={setCourse} addCourse={addCourse}
                  deleteCourse={deleteCourse} updateCourse={updateCourse}
                />}
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;


