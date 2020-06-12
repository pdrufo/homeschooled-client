import React from "react";
import LogEntryTable from "../LogEntryTable/LogEntryTable";
import "./SchoolLogs.css";
import SearchBox from '../SearchBox/SearchBox'

export default function SchoolLogs(props) {
  return (
    <div>
      <header role="banner">
        <h1>School Log</h1>
      </header>

      <section>
        <SearchBox />
        {/* <form id="log-search">
          <div className="form-section">
            <label htmlFor="log-search">Search</label>
            <input type="text" name="recipe-search" />
            <input type="submit" value="Submit" />
          </div>
        </form> */}
      </section>

      <section className="schoolLog-list">
        <LogEntryTable history={props.history} />
      </section>
    </div>
  );
}
