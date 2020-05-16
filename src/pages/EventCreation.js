import React from "react";
import Input from "../block/Input";
import Submit from "../block/Submit";
import axios from "axios";
import Dropdown from "../block/Dropdown";
import Header from "../block/Header";
import Checkbox from "../block/Checkbox";
import "../styles/eventCreation.css";

class EventCreation extends React.Component {
  state = {
    name: undefined,
    date: undefined,
    location: undefined,
    capacity: undefined,
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
    if (event.target.checked) {
      if (event.target.id === "intake") {
        this.setState({ intake: [...this.state.intake, event.target.value] });
      } else {
        this.setState({
          programme: [...this.state.programme, event.target.value],
        });
      }
    } else if (event.target.checked === false) {
      if (event.target.id === "intake") {
        let index = this.state.intake.indexOf(event.target.value);
        let removeUnchecked = this.state.intake;
        removeUnchecked.splice(index, 1);
        this.setState({ intake: removeUnchecked });
      } else {
        let indexOfProgramme = this.state.programme.indexOf(event.target.value);
        let removeUncheckedProgramme = this.state.programme;
        removeUncheckedProgramme.splice(indexOfProgramme, 1);
        this.setState({ programme: removeUncheckedProgramme });
      }
    }
  };

  onSubmit = (formSubmit) => {
    formSubmit.preventDefault();
    axios
      .post("http://localhost:4000/events", {
        name: this.state.name,
        date: new Date(this.state.date).toDateString(),
        location: this.state.location,
        capacity: this.state.capacity,
        intake: this.state.intake,
        programme: this.state.programme,
        coreSelection: this.state.coreSelection,
        attendees: [],
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
                  placeholder="Event Capacity"
                  name="capacity"
                  required
                  onChange={this.onChange}
                />
                <div className="checkboxDiv">
                  <label>
                    <span className="labelText">
                      TDP Intake(s) for this event.
                    </span>
                    <Checkbox
                      checkboxOptions={this.state.intakeValueName}
                      name="intake"
                      required
                      onChange={this.handleCheckboxChange}
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="checkboxDiv">
                  <label>
                    <span className="labelText">
                      TDP programme(s) for this event.
                    </span>
                    <Checkbox
                      checkboxOptions={this.state.programmeValueName}
                      name="programme"
                      required
                      onChange={this.handleCheckboxChange}
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="select">
                  <label>Core/Non-core Event</label>
                  <select
                    name="coreSelection"
                    onChange={this.onChange}
                    required={true}
                    className="selectBox"
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
