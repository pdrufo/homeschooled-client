import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import LandingPage from "../../Routes/LandingPage/LandingPage";
import SchoolLogs from "../../Routes/SchoolLogs/SchoolLogs";
import UpdateLog from "../../Routes/UpdateLog/UpdateLog";
import LogEntry from "../../Routes/LogEntry/LogEntry";
import AddLog from "../../Routes/AddLog/AddLog";
import config from "../../config";
import ApiContext from "../../ApiContext";

class App extends React.Component {
  state = {
    schoolLogs: [],
  };

  componentDidMount() {
    Promise.all([fetch(`${config.API_ENDPOINT}/school-logs`)])
      .then(([schoolLogsRes]) => {
        if (!schoolLogsRes.ok)
          return schoolLogsRes.json().then((e) => Promise.reject(e));

        return Promise.all([schoolLogsRes.json()]);
      })
      .then(([schoolLogs]) => {
        this.setState({ schoolLogs });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddSchoolLog = (newschoolLog) => {
    this.setState({
      schoolLogs: [...this.state.schoolLogs, newschoolLog],
    });
  };

  handleDeleteSchoolLog = (schoolLogId) => {
    this.setState({
      schoolLogs: this.state.schoolLogs.filter(
        (schoolLog) => schoolLog.id !== parseInt(schoolLogId)
      ),
    });
  };

  handleUpdateSchoolLog = (updateSchoolLog) => {
    this.setState({
      schoolLogs: this.state.schoolLogs.map((schoolLog) =>
        schoolLog.id !== parseInt(updateSchoolLog.id)
          ? schoolLog
          : updateSchoolLog
      ),
    });
  };

  render() {
    const value = {
      schoolLogs: this.state.schoolLogs,
      addSchoolLog: this.handleAddSchoolLog,
      deleteSchoolLog: this.handleDeleteSchoolLog,
      updateSchoolLog: this.handleUpdateSchoolLog,
    };

    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Nav />

          <Route exact path={"/"} component={LandingPage} />
          <Route exact path={"/school-logs"} component={SchoolLogs} />
          <Route exact path={"/school-logs/:id"} component={LogEntry} />
          <Route exact path={"/school-logs/:id/update"} component={UpdateLog} />
          <Route exact path={"/addLog"} component={AddLog} />

          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
