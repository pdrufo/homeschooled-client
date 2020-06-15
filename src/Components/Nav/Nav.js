import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="logo" to="/">
        HomeSchool'd
      </Link>
      <ul>
        <li>
          <Link className="nav-item" to="/school-logs">
            All School Logs
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/addLog">
            Add Log
          </Link>
        </li>
      </ul>
    </nav>
  );
}
