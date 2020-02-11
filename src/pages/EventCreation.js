import React from "react";
import Input from "../block/Input";
import Submit from "../block/Submit";
import { Post } from "../Axios/Methods";
import axios from "axios";
import Dropdown from "../block/Dropdown";
import "../styles/eventCreation.css";
import Header from "../block/Header";
import DropDownOption from "../block/DropDownOption";

class EventCreation extends React.Component {
  state = {
    id: 0,
    name: undefined,
    date: undefined,
    location: undefined,
    attendees: undefined,
    intake: [],
    programme: [],
    coreSelection: "",
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
        <Header header="Welcome Back" />
        <form name="newEvent" onSubmit={this.onSubmit}>
          <div class="main">
            <div class="row">
              <div class="form-p">
                <Input
                  type="text"
                  placeholder="Event Name"
                  name="name"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="date"
                  placeholder="Event Date"
                  name="date"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  placeholder="Location"
                  name="location"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="number"
                  placeholder="Number of Attendees"
                  name="attendees"
                  required
                  onChange={this.onChange}
                />
                <div className="select">
                  <label>TDP intake</label>
                  <select name="intake" onChange={this.onChange} required>
                    <Dropdown
                      intakeProgrammeDetails={this.state.intakeDetails}
                    />
                  </select>
                </div>
                <div className="select">
                  <label>TDP programme</label>
                  <select name="programme" onChange={this.onChange} required>
                    <Dropdown
                      intakeProgrammeDetails={this.state.programmeDetails}
                    />
                  </select>
                </div>
                <div className="select">
                  <label>Core/NonCore Event</label>
                  <select
                    name="coreSelection"
                    onChange={this.onChange}
                    required
                  >
                    <DropDownOption
                      intakeValue="core"
                      intakeText="Core Event"
                    />
                    <DropDownOption
                      intakeValue="noncore"
                      intakeText="Non Core Event"
                    />
                  </select>
                </div>
                <Submit />
              </div>
            </div>
          </div>
        </form>
        <p className="eventCreated">{this.state.response}</p>
      </>
    );
  }
}

export default EventCreation;
