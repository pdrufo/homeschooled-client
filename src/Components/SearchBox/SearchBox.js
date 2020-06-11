import React from "react";

import ApiContext from "../../ApiContext";
import LogEntryTable from "../LogEntryTable/LogEntryTable";

export default class SearchBox extends React.Component {
  state = {
    search: "",
    filteredLogs: [],
  };

  static contextType = ApiContext;

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  handleClick = () => {
    this.setState({ search: "" });
  };

  render() {
    let term = this.state.search.toLowerCase().trim();
    let filteredLogs = [];
    if (term.length !== 0) {
      filteredLogs = this.context.schoolLogs.filter((schoolLog) => {
        return (
          schoolLog.student.toLowerCase().indexOf(term) !== -1 ||
          schoolLog.english.toLowerCase().indexOf(term) !== -1 ||
          schoolLog.math.toLowerCase().indexOf(term) !== -1
        );
      });
    }
    return (
      <section>
        <form id="log-search">
          <div className="form-section">
            <label htmlFor="log-search">Search</label>
            <input
              type="text"
              name="schoolLog-search onChange={this.updateSearch.bind(this)}"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="results" onClick={this.handleClick}>
          {filteredLogs.map((schoolLog) => {
            return <LogEntryTable key={schoolLog.id} id={schoolLog.id} />;
          })}
        </div>
      </section>
    );
  }
}
