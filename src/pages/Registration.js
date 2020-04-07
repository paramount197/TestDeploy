import React from "react";
import axios from "axios";
import "../styles/registration.css";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import Submit from "../block/Submit";

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            id: "",
            password: "",
            confirmPassword: "",
            phoneNumber: "",
            intake: "",
            listOfIntakes: [],
            programme: "",
            listOfProgrammes: [],
            listOfSecurityQuestions: [],
            securityQuestion: "",
            securityAnswer: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/users", {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber,
                intake: this.state.intake,
                programme: this.state.programme,
                tdpManagement: "No",
                securityQuestion: this.state.securityQuestion,
                securityAnswer: this.state.securityAnswer
            })
            .then(() => {
                window.location.href = "http://localhost:3000/signin";
            });
    };

    componentDidMount() {
        axios.get("http://localhost:4000/tdpDetails").then(result => {
            this.setState({
                listOfIntakes: result.data.intake,
                listOfProgrammes: result.data.programme

            });
        });
        axios.get("http://localhost:4000/securityQuestions").then(result => {
            this.setState({
                listOfSecurityQuestions: result.data
            });
        });

    }

    render() {
        return (
            <>
                <Header header="Registration page" />
                <div className="main">
                    <div className="row">
                        <Intro intro="Please enter your details below" />
                        <form name="Registration" onSubmit={this.onSubmit}>
                            <Input
                                type="text"
                                placeholder="First Name*"
                                name="firstName"
                                required
                                onChange={this.onChange}
                            />
                            <Input
                                type="text"
                                placeholder="Last Name*"
                                name="lastName"
                                required
                                onChange={this.onChange}
                            />
                            <Input
                                type="email"
                                placeholder="Email Address*"
                                name="id"
                                required
                                onChange={this.onChange}
                            />
                            <Input
                                type="password"
                                placeholder="Password*"
                                name="password"
                                required
                                onChange={this.onChange}
                            />
                            <Input
                                type="password"
                                placeholder="Confirm Password*"
                                name="confirmPassword"
                                required
                                onChange={this.onChange}
                            />
                            {this.state.password !== "" &&
                                this.state.confirmPassword !== "" &&
                                this.state.password !== this.state.confirmPassword && (
                                    <p>Passwords do not match</p>
                                )}
                            <Input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                onChange={this.onChange}
                                pattern="\d{10,11}"
                            />
                            <div className="selectDropdown">
                                <label>Security Question:</label>
                                <select
                                    name="securityQuestion"
                                    onChange={this.onChange}
                                    required={true}>
                                    <Dropdown dropdownOptions={this.state.listOfSecurityQuestions} />
                                </select>
                            </div>
                            <Input
                                type="text"
                                placeholder="Write Security Answer Here"
                                name="securityAnswer"
                                required
                                onChange={this.onChange}
                            />
                            <div className="selectDropdown">
                                <label>TDP intake:</label>
                                <select
                                    name="intake"
                                    onChange={this.onChange}
                                    required={true}
                                >
                                    <Dropdown dropdownOptions={this.state.listOfIntakes} />
                                </select>
                            </div>
                            <div className="selectDropdown">
                                <label>TDP programme:</label>
                                <select
                                    name="programme"
                                    onChange={this.onChange}
                                    required={true}
                                >
                                    <Dropdown dropdownOptions={this.state.listOfProgrammes} />
                                </select>
                            </div>
                            <Submit />
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Registration;
