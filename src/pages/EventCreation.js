import React from "react";
import Input from "../block/Input";
import Submit from "../block/Submit";
import axios from "axios";
import Dropdown from "../block/Dropdown";
import "../styles/eventCreation.css";
import Header from "../block/Header";
import Checkbox from "../block/Checkbox";

class EventCreation extends React.Component {
  state = {
    name: undefined,
    date: undefined,
    location: undefined,
    attendees: undefined,
    intake: [],
    programme: [],
    coreSelection: "",
    intakeValueName: [],
    programmeValueName: [],
    response: undefined,
  };

  onChange = (input) => {
    this.setState({
      [input.target.name]:
        input.target.type === "number"
          ? parseInt(input.target.value)
          : input.target.value,
    });
  };

  handleCheckboxChange = (event) => {
    console.log("handle");
    //this.setState({ intake: event.target.value });
    this.setState((prevState, event) => ({
      intake: [...prevState.intake, event.target],
    }));
    console.log(event);
  };
  // this.setState({
  //   [input.target.name]: () => {
  //   switch(input.target.type) {
  //     case input.target.type === "number":
  //       parseInt(input.target.value)
  //       break;
  //     case input.target.type === "select":

  //   }

  //   }

  // input.target.type === "number"
  //   ? parseInt(input.target.value)
  //   : input.target.value,
  // });

  onSubmit = (formSubmit) => {
    formSubmit.preventDefault();
    axios
      .post("http://localhost:4000/events", {
        name: this.state.name,
        date: this.state.date,
        location: this.state.location,
        attendees: this.state.attendees,
        intake: this.state.intake,
        programme: this.state.programme,
        coreSelection: this.state.coreSelection,
        booked: [],
      })
      .then(this.setState({ response: "Event Created!" }));
  };

  componentDidMount() {
    axios.get("http://localhost:4000/tdpDetails").then((result) => {
      this.setState({
        intakeValueName: result.data.intake,
        programmeValueName: result.data.programme,
      });
    });
  }

  render() {
    console.log("this is the intake " + this.state.intake);
    return (
      <>
        <Header header="Create a new TDP event" />
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

                <div className="checkbox">
                  <label>
                    TDP Intake to Invite
                    <Checkbox
                      checkboxOptions={this.state.intakeValueName}
                      name="intake"
                      required
                      onChange={this.handleCheckboxChange}
                    />
                  </label>
                </div>

                {/* <div className="select">
                  <label>TDP intake</label>
                  <select
                    name="intake"
                    onChange={this.onChange}
                    required={true}
                    multiple
                  >
                    <Dropdown dropdownOptions={this.state.intakeValueName} />
                  </select>
                </div> */}
                <div className="select">
                  <label>TDP programme</label>
                  <select
                    name="programme"
                    onChange={this.onChange}
                    required={true}
                    multiple
                  >
                    <Dropdown dropdownOptions={this.state.programmeValueName} />
                  </select>
                </div>
                <div className="select">
                  <label>Core/Non-core Event</label>
                  <select
                    name="coreSelection"
                    onChange={this.onChange}
                    required={true}
                  >
                    <Dropdown dropdownOptions={["Core", "Non-core"]} />
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
