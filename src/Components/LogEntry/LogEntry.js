import React from "react";
import { Link } from "react-router-dom";
import { findSchoolLog } from "../../school-helpers";
import ApiContext from "../../ApiContext";
import config from "../../config";


export default class LogEntry extends React.Component {
  state = {
    schoolLogs: [],
  };

  static defaultProps = {
    match: {
      params: {},
      onDeleteSchoolLog: () => {},
    },
  };

  static contextType = ApiContext;

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/school-logs/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!this.state.schoolLog) {
          this.setState({ schoolLog: data });
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleClickDelete = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

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

  render() {
    const { schoolLogs = [] } = this.context;
    console.log(schoolLogs)
    const { id } = this.props.match.params;
    const schoolLog = findSchoolLog(schoolLogs, id);
    console.log(id)
    return (
      <tr key={id}>
        <td>{schoolLog.school_date}</td>
        <td>{schoolLog.student}</td>
        <td>{schoolLog.english}</td>
        <td>{schoolLog.math}</td>
        <td>{schoolLog.specialty}</td>
        <td>{schoolLog.notes}</td>
        <td>
          <Link to="/update">Edit</Link>
          <button
            onClick={this.handleClickDelete}
            className="schoolLog-delete"
            type="button"
          >
            delete
          </button>
        </td>
      </tr>
    );
  }
}
