import React from "react";
import "./UpdateLog.css";
import ApiContext from "../../ApiContext";
import config from "../../config";

export default class UpdateLog extends React.Component {
  state = {
    id: "",
    school_date: "",
    student: "",
    english: "",
    math: "",
    specialty: "",
    notes: "",
  };

  static defaultProps = {
    match: {
      params: {},
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
      .then((responseData) => {
        if (!this.state.schoolLog) {
          this.setState({
            id: responseData.id,
            school_date: responseData.school_date,
            student: responseData.student,
            english: responseData.english,
            math: responseData.math,
            specialty: responseData.specialty,
            notes: responseData.notes,
          });
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  /** take new data from the form and update the LogEntry */
  handleChangeSchoolDate = (e) => {
    this.setState({ school_date: e.target.value });
  };
  handleChangeStudent = (e) => {
    this.setState({ student: e.target.value });
  };
  handleChangeEnglish = (e) => {
    this.setState({ english: e.target.value });
  };
  handleChangeMath = (e) => {
    this.setState({ math: e.target.value });
  };
  handleChangeSpecialty = (e) => {
    this.setState({ specialty: e.target.value });
  };
  handleChangeNotes = (e) => {
    this.setState({ notes: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const {
      school_date,
      student,
      english,
      math,
      specialty,
      notes,
    } = this.state;
    const newSchoolLog = {
      id,
      school_date,
      student,
      english,
      math,
      specialty,
      notes,
    };
    /**PATCH method will update the schoolLog  */
    fetch(`${config.API_ENDPOINT}/school-logs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newSchoolLog),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
      })
      .then(() => {
        this.context.updateSchoolLog(newSchoolLog);
        this.props.history.push("/school-logs");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleClickCancel = () => {
    this.props.history.push("/");
  };
  render() {
    const {
      school_date,
      student,
      english,
      math,
      specialty,
      notes,
    } = this.state;

    return (
      <div className="addSchoolLog-container">
        <header>
          <h1>Edit Log</h1>
        </header>
        <section>
          <form id="add-log" onSubmit={this.handleSubmit}>
            <div className="form-section">
              <label htmlFor="school_date">Date</label>
              <input
                aria-label="input for label"
                type="date"
                name="school_date"
                required
                value={school_date}
                onChange={this.handleChangeSchoolDate}
              />
            </div>
            <div className="form-section">
              <label htmlFor="student">Student Name</label>
              <input
                aria-label="input for label"
                type="text"
                name="student"
                required
                value={student}
                onChange={this.handleChangeStudent}
              />
            </div>
            <div className="form-section">
              <label htmlFor="english">English</label>
              <textarea
                aria-label="input for label"
                name="english"
                rows="5"
                required
                value={english}
                onChange={this.handleChangeEnglish}
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="math">Math</label>
              <textarea
                aria-label="input for label"
                name="math"
                rows="5"
                required
                value={math}
                onChange={this.handleChangeMath}
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="specialty">Specialty</label>
              <select
                required
                aria-label="input for label"
                value={specialty}
                onChange={this.handleChangeSpecialty}
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
                value={notes}
                onChange={this.handleChangeNotes}
              ></textarea>
            </div>
            <div className="form-section">
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button
                type="button"
                onClick={this.handleClickCancel}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
