import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/school-logs">All School Logs</Link>
      <Link to="/">Home</Link>
      <Link to="/addLog">Add Log</Link>
    </nav>
  );
}
