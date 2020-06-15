import React from "react";
import LogEntryTable from "../LogEntryTable/LogEntryTable";
import "./SchoolLogs.css";

export default function SchoolLogs(props) {
  return (
    <div className="schoolLogs-container">
      <header role="banner">
        <h1>School Logs</h1>
      </header>

      <section className="schoolLog-list">
        <LogEntryTable history={props.history} />
      </section>
    </div>
  );
}
