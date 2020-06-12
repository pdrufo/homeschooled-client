import React from "react";
import LogEntryTable from "../LogEntryTable/LogEntryTable";
import "./SchoolLogs.css";

export default function SchoolLogs(props) {
  return (
    <div>
      <header role="banner">
        <h1>School Log</h1>
      </header>

      <section className="schoolLog-list">
        <LogEntryTable history={props.history} />
      </section>
    </div>
  );
}
