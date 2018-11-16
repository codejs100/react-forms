import React, { Component } from "react";

class Controlled extends Component {
  state = {
    fname: "",
    lname: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleFNameChange = event => {
    event.preventDefault();
    this.setState({
      fname: event.target.value
    });
  };

  handleLNameChange = event => {
    event.preventDefault();
    this.setState({
      lname: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form_element">
            <label>Enter First Name</label>
            <input
              type="text"
              onChange={this.handleFNameChange}
              value={this.state.fname}
            />
          </div>
          <div className="form_element">
            <label>Enter First Name</label>
            <input
              type="text"
              value={this.state.lname}
              onChange={this.handleLNameChange}
            />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit Controlled Form
          </button>
        </form>
      </div>
    );
  }
}

export default Controlled;
