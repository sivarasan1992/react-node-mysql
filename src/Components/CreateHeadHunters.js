import React, { Component } from "react";
import "./CreateHeadHunters.css";

export default class CreateHeadHunters extends Component {
  state = {
    name: "",
    email: "",
    phoneNo: "",
    noOfSE: "",
    noOfQA: ""
  };
  handleChange = (e, key) => {
    e.preventDefault();
    const newState = this.state;
    newState[key] = e.target.value;
    this.setState({ ...newState });
  };
  render() {
    return (
      <div>
        <form className="myForm" onSubmit={(e) => {
          e.preventDefault();
          this.props.onSave(this.state);
        }}>
          <label> Name </label>
          <input
            type="text"
            name="customer_name"
            required
            onChange={e => this.handleChange(e, "name")}
          />
          <label>Email </label>
          <input
            type="email"
            name="email_address"
            onChange={e => this.handleChange(e, "email")}
          />
          <label>Phone No </label>
          <input
            type="text"
            name="email_address"
            required
            onChange={e => this.handleChange(e, "phoneNo")}
          />
          <label>No of requited Software Engineers </label>
          <input
            type="text"
            name="email_address"
            required
            onChange={e => this.handleChange(e, "noOfSE")}
          />
          <label>No of requited Software Engineers </label>
          <input
            type="text"
            name="email_address"
            required
            onChange={e => this.handleChange(e, "noOfQA")}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
