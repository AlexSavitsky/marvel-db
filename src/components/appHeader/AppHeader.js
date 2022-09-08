import { Link, NavLink, useLocation } from "react-router-dom";

import "./appHeader.scss";

const AppHeader = () => {
  const location = useLocation();

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/marvel-db">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              location={{ search: "/characters" }}
              style={({ isActive }) => ({
                color:
                  isActive || location.pathname.includes("characters")
                    ? "#9F0013"
                    : "inherit",
              })}
              to={"marvel-db/"}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "inherit",
              })}
              to="/marvel-db/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
