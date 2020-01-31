import React from "react";
import Input from "../block/Input";
import Submit from "../block/Submit";
import { Post } from "../Axios/Methods";

//need to add event details and add them to post
//id needs to be reviewed further

class EventCreation extends React.Component {
  state = {
    id: 0,
    name: undefined,
    date: undefined,
    location: undefined,
    programme: undefined,
    cohort: undefined
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
          {/* <label>TDP intake</label>
          <select name="intake" onChange={this.onChange}>
            <Dropdown intakeProgrammeDetails={tdpData.tdpDetails.intake} />
          </select>
          <label>TDP programme</label>
          <select name="programme" onChange={this.onChange}>
            <Dropdown intakeProgrammeDetails={tdpData.tdpDetails.programme} />
          </select> */}
          <Submit />
        </form>

        <p>{this.state.response}</p>
      </>
    );
  }
}

export default EventCreation;
