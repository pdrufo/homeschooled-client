import React from "react";
import config from "../../config";
import ApiContext from '../../ApiContext'


export default class SearchBox extends React.Component {
state = {
    dataSource: [],

  };

  static contextType = ApiContext;

  onChange = e => {
    const { onChange } = this.context;
    onChange(e.target.value);
}
  fetchData(text) {
    this.setState({ text });

    fetch(`${config.API_ENDPOINT}/school-logs`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.Search,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <section>
        <form id="log-search">
          <div className="form-section">
            <label htmlFor="log-search">Search</label>
            <input
              type="text"
              name="schoolLog-search onChange={this.onChange}"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    );
  }
}
