import React from "react";
import Input from "../block/Input";
import Submit from "../block/Submit";
import { Post } from "../Axios/Methods";
import axios from "axios";
import Dropdown from "../block/Dropdown";

class EventCreation extends React.Component {
  state = {
    id: 0,
    name: undefined,
    date: undefined,
    location: undefined,
    intake: [],
    programme: [],
    intakeDetails: [],
    programmeDetails: []
  };

  onChange = input => {
    this.setState({ [input.target.name]: input.target.value });
  };

  onSubmit = formSubmit => {
    formSubmit.preventDefault();
    this.setState({ id: this.state.id + 1 });
    Post("http://localhost:4000/events", this.state);
    this.setState({ response: "Event Created!" });
  };
  componentDidMount() {
    axios.get("http://localhost:4000/tdpDetails").then(result => {
      this.setState({
        intakeDetails: result.data.intake,
        programmeDetails: result.data.programme
      });
    });
  }

  render() {
    return (
      <>
        <form name="newEvent" onSubmit={this.onSubmit}>
          <Input
            type="text"
            placeholder="Enter Event Name"
            name="name"
            required
            onChange={this.onChange}
          ></Input>
          <Input
            type="text"
            placeholder="Event Date"
            name="date"
            required
            onChange={this.onChange}
          ></Input>
          <Input
            type="text"
            placeholder="Enter the Location"
            name="location"
            required
            onChange={this.onChange}
          ></Input>
          <label>TDP intake</label>
          <select name="intake" onChange={this.onChange}>
            <Dropdown intakeProgrammeDetails={this.state.intakeDetails} />
          </select>
          <label>TDP programme</label>
          <select name="programme" onChange={this.onChange}>
            <Dropdown intakeProgrammeDetails={this.state.programmeDetails} />
          </select>
          <Submit />
        </form>

        <p>{this.state.response}</p>
      </>
    );
  }
}

export default EventCreation;
