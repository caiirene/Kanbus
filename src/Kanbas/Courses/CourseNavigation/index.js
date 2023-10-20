import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", 
  "Grades", "Panopto Video", "Discussions", "Announcements", "Pages", "Settings", 
  "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group" style={{ width: 100 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;