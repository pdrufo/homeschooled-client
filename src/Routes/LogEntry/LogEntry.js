import React from "react";
import "./LogEntry.css";
import { findSchoolLog } from "../../school-helpers";
import ApiContext from "../../ApiContext";
import config from "../../config";

/**LogEntry will fetch a unique schoolLog and display it's details. The user will have the option to edit or delete the schoolLog */
export default class LogEntry extends React.Component {
  state = {
    schoolLogs: [],
  };

  static defaultProps = {
    match: {
      params: {},
      onDeleteSchoolLog: () => {},
      onUpdateSchoolLog: () => {},
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

    console.log(id);
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
        this.props.history.push(`/school-logs/${id}/update`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { schoolLogs = [] } = this.context;
    const { id } = this.props.match.params;
    const schoolLog = findSchoolLog(schoolLogs, id);
    return (
      <div className="addSchoolLog-container">
        <header>
          <h1> School Log</h1>
        </header>
        <section>
          <form id="school-log">
            <div className="form-section">
              <label htmlFor="school_date">Date</label>
              <input
                aria-label="input for label"
                type="text"
                name="school_date"
                required
                defaultValue={schoolLog ? schoolLog.school_date : ""}
              />
            </div>
            <div className="form-section">
              <label htmlFor="student">Student Name</label>
              <input
                aria-label="input for label"
                type="text"
                name="student"
                required
                defaultValue={schoolLog ? schoolLog.student : ""}
              />
            </div>
            <div className="form-section">
              <label htmlFor="english">English</label>
              <textarea
                aria-label="input for label"
                name="english"
                rows="5"
                required
                defaultValue={schoolLog ? schoolLog.english : ""}
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="math">Math</label>
              <textarea
                aria-label="input for label"
                name="math"
                rows="5"
                required
                defaultValue={schoolLog ? schoolLog.math : ""}
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="specialty">Specialty</label>
              <select
                aria-label="input for label"
                required
                defaultValue={schoolLog ? schoolLog.specialty : ""}
              >
                <option defaultValue value="Science">
                  Science
                </option>
                <option value="Art">Art</option>
                <option value="Drama">Drama</option>
                <option value="Music">Music</option>
                <option value="Gym">Gym</option>
              </select>
            </div>
            <div className="form-section">
              <label htmlFor="notes">Notes</label>
              <textarea
                aria-label="input for label"
                name="notes"
                rows="5"
                required
                defaultValue={schoolLog ? schoolLog.notes : ""}
              ></textarea>
            </div>
            <div className="form-section">
              <button
                onClick={this.handleClickUpdate}
                className="edit-button"
                type="button"
              >
                Edit
              </button>
              <button
                onClick={this.handleClickDelete}
                className="delete-button"
                type="button"
              >
                delete
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
