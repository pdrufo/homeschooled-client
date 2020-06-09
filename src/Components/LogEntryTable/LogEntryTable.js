import React from "react";
import "./LogEntryTable.css";
import ApiContext from "../../ApiContext";
import config from "../../config";
import { findSchoolLog } from "../../school-helpers";

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

  handleClickDelete = (e) => {
    e.preventDefault();
    
    const { id } = this.props.match.params;
    
    
console.log(id)
    fetch(`${config.API_ENDPOINT}/school-logs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        this.context.deleteSchoolLog(id);
        this.props.history.push(`/school-logs`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  handleClickUpdate = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

    fetch(`${config.API_ENDPOINT}/school-logs/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        this.context.updateSchoolLog(id);
        this.props.history.push(`/school-logs/${id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
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
            onClick={this.handleClickUpdate}
            className="schoolLog-update"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={this.handleClickDelete}
            className="schoolLog-delete"
            type="button"
          >
            delete
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
