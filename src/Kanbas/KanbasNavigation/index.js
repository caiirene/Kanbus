import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiComputerFill, RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxesFill } from "react-icons/bs";
import {AiOutlineHistory} from "react-icons/ai";

import  {FaCreativeCommonsSa} from "react-icons/fa";
import {BiHelpCircle} from "react-icons/bi";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxesFill className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <RiComputerFill className="wd-icon" />,
    Commons: <FaCreativeCommonsSa className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 80 }}>
        <div className="N">N</div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;