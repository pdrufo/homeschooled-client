import React from "react";

import ApiContext from "../../ApiContext";
import LogEntryTable from "../LogEntryTable/LogEntryTable";

export default class SearchBox extends React.Component {
  state = {
    search: "",
    filteredLogs: [],
  };

  static contextType = ApiContext;

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  handleClick = () => {
    this.setState({ search: "" });
  };

  render() {
    let term = this.state.search.toLowerCase().trim();
    let filteredLogs = [];
    if (term.length !== 0) {
      filteredLogs = this.context.schoolLogs.filter((schoolLog) => {
        return (
          schoolLog.student.toLowerCase().indexOf(term) !== -1 ||
          schoolLog.english.toLowerCase().indexOf(term) !== -1 ||
          schoolLog.math.toLowerCase().indexOf(term) !== -1
        );
      });
    }
    return (
      <section>
        <form id="log-search" onClick={this.handleClick}>
          <div className="form-section">
            <label htmlFor="log-search">Search</label>
            <input
              type="text"
              name="schoolLog-search onChange={this.updateSearch.bind(this)}"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="results" >
          {filteredLogs.map((schoolLog) => {
            return <LogEntryTable key={schoolLog.id} id={schoolLog.id} />;
          })}
        </div>
      </section>
    );
  }
// static contextType = ApiContext;
// onChange = e => {
//     const { onChange } = this.context;
//     onChange(e.target.value);
// }
// render(){
//     const { filteredLogs } = this.context;
//     console.log(filteredLogs)
// return (
//           <section>
//             <form id="log-search" onClick={this.handleClick}>
//               <div className="form-section">
//                 <label htmlFor="log-search">Search</label>
//                 <input
//                   type="text"
//                   name="schoolLog-search onChange={this.onChange}"
//                 />
//                 <input type="submit" value="Submit" />
//               </div>
//             </form>
//             <div className="results" >
//               {filteredLogs.map((filteredLog) => {
//                 return <LogEntryTable key={filteredLog.id} {...filteredLog} />;
//               })}
//             </div>
//           </section>
//         );
// }
}