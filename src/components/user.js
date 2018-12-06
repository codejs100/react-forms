import React, { Component } from "react";
import FormElement from "./Widgets/Form/formelement";
import { firebaseDb } from "./../firebase";

class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "First Name",
        config: {
          name: "fname_input",
          type: "text",
          placeholder: "Enter the first name"
        },
        validation: {
          required: true,
          minLen: 5
        },
        valid: false,
        touched: false,
        validationMessge: ""
      },
      lastname: {
        element: "input",
        value: "",
        label: true,
        labelText: "Last Name",
        config: {
          name: "lname_input",
          type: "text",
          placeholder: "Enter the last name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessge: ""
      },
      message: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Message",
        config: {
          name: "message_text",
          cols: 100,
          rows: 10
        },
        validation: {
          required: false
        },
        valid: true
      },
      age: {
        element: "select",
        value: "",
        label: true,
        labelText: "Age",
        config: {
          name: "age_select",
          options: [
            { value: 1, text: "1 - 10" },
            { value: 2, text: "11 - 20" },
            { value: 3, text: "21 - 30" },
            { value: 4, text: "+30" }
          ]
        },
        validation: {
          required: false
        },
        valid: true
      }
    }
  };
  /*
  constructor(params) {
    super(params);
    this.submitHandler = this.submitHandler.bind(this);
  }
*/
  updateState = newState => {
    this.setState({
      formData: newState
    });
  };

  submitHandler = event => {
    event.preventDefault();
    let data = {};
    let formValid = true;
    for (let key in this.state.formData) {
      data[key] = this.state.formData[key].value;
    }
    for (let key in this.state.formData) {
      formValid = this.state.formData[key].valid && formValid;
    }
    if (formValid) {
      console.log(data);
      firebaseDb.ref("users").push(data);
    }
  };

  /*

  submitHandler(event) {
    event.preventDefault();
    let data = {};
    for (let key in this.state.formData) {
      data[key] = this.state.formData[key].value;
    }
    console.log(data);
  } 
  */

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <FormElement
            data={this.state.formData}
            blur={newState => this.updateState(newState)}
            change={newState => this.updateState(newState)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
