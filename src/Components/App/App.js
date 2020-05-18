import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import AllLogs from "../AllLogs/AllLogs";
import UpdateLog from "../UpdateLog/UpdateLog";
import AddLog from "../AddLog/AddLog";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/all-logs"} component={AllLogs} />
        <Route exact path={"/update"} component={UpdateLog} />
        <Route exact path={"/addLog"} component={AddLog} />

        <Footer />
      </div>
    );
  }
}
export default App;
