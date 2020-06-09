import React from "react";
import "./AddLog.css";
import ApiContext from "../../ApiContext";
import config from "../../config";

export default class AddLog extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = ApiContext;
  /**get the values a user puts into the form and post the new recipe to the api */
  handleSubmit = (e) => {
    e.preventDefault();
    const newSchoolLog = {
      school_date: e.target["school_date"].value,
      student: e.target["student"].value,
      english: e.target["english"].value,
      math: e.target["math"].value,
      specialty: e.target["specialty"].value,
      notes: e.target["notes"].value,
    };

    if (
      !newSchoolLog.school_date ||
      !newSchoolLog.student ||
      !newSchoolLog.english ||
      !newSchoolLog.math ||
      !newSchoolLog.specialty ||
      !newSchoolLog.notes
    ) {
      alert(
        "School_date, student, english, math, specialty and notes are all required"
      );
    } else {
      fetch(`${config.API_ENDPOINT}/school-logs`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newSchoolLog),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .then((schoolLog) => {
          this.context.addSchoolLog(schoolLog);
          this.props.history.push(`/school-logs`);
        })
        .catch((error) => {
          console.error({ error });
        });
    }
  };
  render() {
    return (
      <div>
        <header>
          <h1>Add Log</h1>
        </header>
        <section>
          <form id="add-log">
            <div className="form-section">
              <label htmlFor="school_date">Date</label>
              <input
                type="text"
                name="school_date"
                placeholder="5/7/2020"
                required
              />
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
              <select required>
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
