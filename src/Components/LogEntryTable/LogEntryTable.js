import React from "react";
import "./LogEntryTable.css";
import ApiContext from "../../ApiContext";

export default class LogEntryTable extends React.Component {
  state = {
    schoolLogs: [],
  };

  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = ApiContext;

  handleClickDetails = (id) => {
    this.props.history.push(`/school-logs/${id}`);
  };
  render() {
    const schoolLogTable = this.context.schoolLogs.map((schoolLog, id) => (
      <tr key={id}>
        <td>{schoolLog.school_date}</td>
        <td>{schoolLog.student}</td>
        <td>{schoolLog.english}</td>
        <td>{schoolLog.math}</td>
        <td>{schoolLog.specialty}</td>
        <td>{schoolLog.notes}</td>
        <td>
          <button
            onClick={() => this.handleClickDetails(schoolLog.id)}
            className="details-button"
            type="button"
          >
            details
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="log-entry">
        <table id="schoolLogs">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Student</th>
              <th>English</th>
              <th>Math</th>
              <th>Specialty</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
            {schoolLogTable}
          </tbody>
        </table>
      </div>
    );
  }
}
