import React from "react";
import LogEntry from "../LogEntry/LogEntry";
import "./AllLogs.css";

export default function RecipeList() {
  return (
    <div>
      <header role="banner">
        <h1>School Log</h1>
      </header>

      <section>
        <form id="log-search">
          <div className="form-section">
            <label htmlFor="log-search">Search</label>
            <input type="text" name="recipe-search" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>

      <section className="recipe-list">
        <LogEntry />
      </section>
    </div>
  );
}
