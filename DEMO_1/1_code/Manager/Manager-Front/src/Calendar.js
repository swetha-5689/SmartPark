import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBIcon,
    MDBBadge,
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdbreact";
import "./index.css";
{
    /*Calendar class extends Component. Creates Calendar for Calendar Page in Manager Access Portal*/
}
class App extends Component {
    /* Calendar class constructor */

    constructor(props) {
        super(props); //handles calls to the parent constructor
        this.state = {
            // state property
            modal: false,
            events: [
                // Calendar Events array
                {
                    id: 1,
                    time: "9:00am",
                    title: "St. Patrick's Day Parade",
                    location: "Highland Park",
                    description:
                        "Expect high demand for walk-ins, reservations, and a large number of overstays"
                },
                {
                    id: 2,
                    time: "3:30pm",
                    title: "TEDx",
                    location: "RAC",
                    description: "Expect students to walk-in to garage."
                },

                {
                    id: 3,
                    time: "5:00pm",
                    title: "Staff Meeting",
                    location: "Room 202",
                    description: "Staff Parking"
                }
            ]
        };
    }

    /* Creates and adds a new event to the array*/
    addEvent = () => {
        var newArray = [...this.state.events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1, //id number of Event
            time: this.state.time, //time of Event
            title: this.state.title, //title of Event
            location: this.state.location, //location of Event
            description: this.state.description //description of Event
        });
        this.setState({ events: newArray });
        this.setState({
            time: "",
            title: "",
            location: "",
            description: ""
        });
    };
    /* Handles user input changes when editing text fields when adding a new event to the Calendar*/
    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
    };
    /* Handles deletion of event from the Calendar*/
    handleDelete = eventId => {
        const events = this.state.events.filter(e => e.id !== eventId);
        this.setState({ events });
    };
    /* Toggles Add New Event Modal */
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };
    /* Renders Calendar Page with Calendar*/
    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9" className="mb-r">
                            <h2 className="text-uppercase my-3">Today:</h2>
                            {/* Places Events on Calendar*/}
                            <div id="events">
                                {this.state.events.map(event => (
                                    <Event
                                        key={event.id}
                                        id={event.id}
                                        time={event.time}
                                        title={event.title}
                                        location={event.location}
                                        description={event.description}
                                        onDelete={this.handleDelete}
                                    />
                                ))}
                            </div>
                            <MDBRow className="mb-4">
                                <MDBCol
                                    xl="3"
                                    md="6"
                                    className="mx-auto text-center"
                                >
                                    {/* Add Event Button*/}
                                    <MDBBtn
                                        color="info"
                                        rounded
                                        onClick={this.toggleModal}
                                    >
                                        Add Event
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        {/* Sidebar: Counts and displays current number of scheduled events*/}
                        <MDBCol md="3">
                            <h3 className="text-uppercase my-3">Schedule</h3>
                            <h6 className="my-3">
                                It is going to be busy that today. You have{" "}
                                <b>{this.state.events.length} events </b> today.
                            </h6>
                            <h1 className="my-3">
                                <MDBRow>
                                    <MDBCol xs="3" className="text-center">
                                        <MDBIcon icon="sun" fixed />
                                    </MDBCol>
                                    {/* Displays weather and description*/}
                                    <MDBCol xs="9">Sunny</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol xs="3" className="text-center">
                                        <MDBIcon
                                            icon="thermometer-three-quarters"
                                            fixed
                                        />
                                    </MDBCol>
                                    <MDBCol xs="9">23°C</MDBCol>
                                </MDBRow>
                            </h1>
                            <p>
                                Today will dry and sunny, becoming warm in the
                                afternoon with temperatures of between 20 and 25
                                degrees.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* Controls Modal*/}
                <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <MDBModalHeader
                        className="text-center"
                        titleClass="w-100 font-weight-bold"
                        toggle={this.toggleModal}
                    >
                        Add new event
                    </MDBModalHeader>
                    <MDBModalBody>
                        {/* Hints inside Modal*/}
                        <form className="mx-3 grey-text">
                            <MDBInput
                                name="time"
                                label="Time"
                                icon="clock"
                                hint="12:30"
                                group
                                type="text"
                                getValue={this.handleInputChange("time")}
                            />
                            <MDBInput
                                name="title"
                                label="Title"
                                icon="edit"
                                hint="Briefing"
                                group
                                type="text"
                                getValue={this.handleInputChange("title")}
                            />
                            <MDBInput
                                name="location"
                                label="Location (optional)"
                                icon="map"
                                group
                                type="text"
                                getValue={this.handleInputChange("location")}
                            />
                            <MDBInput
                                name="description"
                                label="Description (optional)"
                                icon="sticky-note"
                                group
                                type="textarea"
                                getValue={this.handleInputChange("description")}
                            />
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        {/* Add Button inside Modal*/}
                        <MDBBtn
                            color="info"
                            onClick={() => {
                                this.toggleModal();
                                this.addEvent();
                            }}
                        >
                            Add
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </React.Fragment>
        );
    }
}
/* Class Event extends Component. Controls Created Calendar Events on Calendar Page*/
class Event extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Event Time */}
                <div className="media mt-1">
                    <h3 className="h3-responsive font-weight-bold mr-3">
                        {this.props.time}
                    </h3>
                    <div className="media-body mb-3 mb-lg-3">
                        {/* Delete Button */}
                        <MDBBadge
                            color="danger"
                            className="ml-2 float-right"
                            onClick={() => this.props.onDelete(this.props.id)}
                        ></MDBBadge>
                        <h6 className="mt-0 font-weight-bold">
                            {this.props.title} {/* Event title*/}
                        </h6>{" "}
                        <hr className="hr-bold my-2" />
                        {this.props.location && (
                            <React.Fragment>
                                {/* Location Arrow*/}
                                <p className="font-smaller mb-0">
                                    <MDBIcon icon="location-arrow" />{" "}
                                    {this.props.location}
                                </p>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                {/* Event Description */}
                {this.props.description && (
                    <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
                        {this.props.description}
                    </p>
                )}
            </React.Fragment>
        );
    }
}
export default App;
