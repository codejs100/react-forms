import React, { Component } from "react";

class Uncontrolled extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.fname.value, this.lname.value);
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form_element">
            <label>Enter First Name</label>
            <input type="text" ref={input => (this.fname = input)} />
          </div>
          <div className="form_element">
            <label>Enter First Name</label>
            <input type="text" ref={input => (this.lname = input)} />
          </div>
          <button type="submit" onClick={this.handleSubmit}>
            Submit UnControlled Form
          </button>
        </form>
      </div>
    );
  }
}

export default Uncontrolled;
