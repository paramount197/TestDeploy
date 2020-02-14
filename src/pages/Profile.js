import React from "react";
import Header from "../block/Header";
import Events from "../block/Events";
import axios from "axios";

class Profile extends React.Component {

    state = {
        events: []
    };

    componentDidMount() {
        axios.get("http://localhost:4000/tdpEventsList").then(result => {
            console.log("this is the", result);
            this.setState({
                events: result.data
            })
        })
    };

    render() {
        return (
            <>
                <Header header="Welcome back!" />
                <div className="CoreEvents">
                    <h2> Core events </h2>
                    <Events
                        eventsDetail={this.state.events.filter(
                            function (x) {
                                if (x.type === "Core") {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                        )}
                    />
                </div>

                <div className="NonCoreEvents">
                    <h2> Non core events </h2>
                    <Events
                        eventsDetail={this.state.events.filter(
                            function (x) {
                                if (x.type === "NonCore") {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }

                        )}
                    />
                </div>
            </>
        );
    }
}

export default Profile;