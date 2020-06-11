import React from "react";
import "./LogEntryTable.css";
import ApiContext from "../../ApiContext";
import { Link } from "react-router-dom";

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

  // handleClickDetails = (e, id) => {
  //   e.preventDefault();

  //   fetch(`${config.API_ENDPOINT}/school-logs/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then(() => {

  //       this.props.history.push(`/school-logs/${id}`);
  //     })
  //     .catch((error) => {
  //       console.error({ error });
  //     });
  // };
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
          {/* <Link to={`/school-logs/${schoolLog.id}`}> */}
            <button
              onClick={() => this.handleClickDetails(schoolLog.id)}
              className="schoolLog-details"
              type="button"
            >
              details
            </button>
          {/* </Link> */}
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
