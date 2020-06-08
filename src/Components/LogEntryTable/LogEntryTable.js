import React from "react";
import "./LogEntryTable.css";
import ApiContext from "../../ApiContext";
import LogEntry from "../LogEntry/LogEntry";

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

  render() {
    const schoolLogTable = this.context.schoolLogs.map((schoolLog, id) => (
      <LogEntry key={id} data={schoolLog} />
    ));
    return (
      <div className="log-entry">
        <table id="schoolLogs">
          <tbody>{schoolLogTable}</tbody>
          {/* <tr>
          <th>Date</th>
          <th>Student</th>
          <th>English</th>
          <th>Math</th>
          <th>Specialty</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>2020/05/01</td>
          <td>Joe</td>
          <td>Reading</td>
          <td>Algebra</td>
          <td>Science</td>
          <td>All work done</td>
          <td>
            <Link to="/update">Edit</Link>
            <a href="delete.html">Delete</a>
          </td>
        </tr>
        <tr>
          <td>2020/05/02</td>
          <td>Joe</td>
          <td>Writing</td>
          <td>Geometry</td>
          <td>Art</td>
          <td>did not finish</td>
          <td>
            <a href="edit1.html">Edit</a>
            <a href="delete1.html">Delete</a>
          </td>
        </tr>
        <tr>
          <td>2020/05/02</td>
          <td>Bill</td>
          <td>Reading</td>
          <td>Numbers</td>
          <td>Art</td>
          <td>great job</td>
          <td>
            <a href="edit1.html">Edit</a>
            <a href="delete1.html">Delete</a>
          </td>
        </tr> */}
        </table>
      </div>
    );
  }
}
