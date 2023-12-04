import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const links = [
    "Home",
    "Signin",
    "Signup",
    "Account",
  ];

  const { pathname } = useLocation();
  return (
    <div className="list-group ms-3 w-75 mt-2">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
export default Navigation;