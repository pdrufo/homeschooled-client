import React from "react";

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



  render() {
    const { schoolLogs = [] } = this.context;
    const { id } = this.props.match.params;
    const schoolLog = findSchoolLog(schoolLogs, id);
    console.log(id)
    console.log(schoolLog)
    return (
        <div>
        <header>
          <h1> School Log</h1>
        </header>
        <section>
          <form id="school-log">
            <div className="form-section">
              <label htmlFor="school_date">Date</label>
              <input
                type="text"
                name="school_date"
                required
                value= {schoolLog.school_date}
              />
            </div>
            <div className="form-section">
              <label htmlFor="student">Student Name</label>
              <input
                type="text"
                name="student"
                required
                value={schoolLog.student}
               
              />
            </div>
            <div className="form-section">
              <label htmlFor="english">English</label>
              <textarea
                name="english"
                rows="5"
                required
                value={schoolLog.english}
                
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="math">Math</label>
              <textarea
                name="math"
                rows="5"
                required
                value={schoolLog.math}
             
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="specialty">Specialty</label>
              <select
                required
                value={schoolLog.specialty}
                
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
                name="notes"
                rows="5"
                required
                value={schoolLog.notes}
                
              ></textarea>
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
