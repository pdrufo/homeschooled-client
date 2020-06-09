import React from "react";
import "./UpdateLog.css";
import ApiContext from "../../ApiContext";
import {findSchoolLog} from "../../school-helpers";
import config from "../../config";

export default class UpdateLog extends React.Component {
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
  render() {
    const { schoolLogs = [] } = this.context;
    console.log(schoolLogs);
    const { id } = this.props.match.params;
    const schoolLog = findSchoolLog(schoolLogs, id);
    console.log(this.props.match.params);
    return (
      <div>
        <header>
          <h1>Edit Log</h1>
        </header>
        <section>
          <form id="add-log">
            <div className="form-section">
              <label htmlFor="date">Date</label>
              <input type="text" name="date" placeholder="5/7/2020" required />
            </div>
            <div className="form-section">
              <label htmlFor="student">Student Name</label>
              <input type="text" name="student" required />
            </div>
            <div className="form-section">
              <label htmlFor="english">English</label>
              <textarea name="english" rows="5" required></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="math">Math</label>
              <textarea name="english" rows="5" required></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="specialty">Specialty</label>
              <textarea name="english" rows="5" required></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="notes">Notes</label>
              <textarea name="notes" rows="5" required></textarea>
            </div>
            <div className="form-section">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
