import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Moment from "react-moment";

/* ReservationTableRow puts Reservation information into the table in the Reservations Page in the Manager Access Portal */

class ReservationTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRes = this.deleteRes.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  /* Deletes Reservations from database */
  deleteRes() {
    axios
      .delete(
        "https://secure-savannah-03864.herokuapp.com/reservation/" +
          this.props.obj._id
      )
      .then((response) => {
        this.setState({ reservations: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.reservations();
    this.hideModal();

    window.location.reload(true); //Come on babeeeee
  }
  /* Gets Reservations from database */
  componentDidMount() {
    axios
      .get(
        "https://secure-savannah-03864.herokuapp.com/reservation/email/" +
          this.props.email
      )
      .then((response) => {
        this.setState({ reservatinos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  /* Displays Confirmation when deleting Reservations from database */
  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header>
            <Modal.Title>Confirm delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this reservation? Email Confirmation
            will be sent.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Cancel</Button>
            <Button variant="danger" onClick={this.deleteRes}>
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Displays Reservation Information */}
        <tr>
          <td>
            {" "}
            <Moment format="YYYY MMMM Do">{this.props.obj.date}</Moment>{" "}
          </td>
          <td>
            {" "}
            <Moment format="hh:mm A">{this.props.obj.startTime}</Moment>{" "}
          </td>
          <td>
            {" "}
            <Moment format="hh:mm A">{this.props.obj.endTime}</Moment>{" "}
          </td>
          <td>
            {/* Delete Button */}
            <Button size="sm" variant="danger" onClick={this.showModal}>
              Cancel
            </Button>
            {/* Bill Button */}
            {!this.props.obj.Paid && (
              <Button size="sm" variant="primary">
                Edit
              </Button>
            )}
          </td>
        </tr>
      </>
    );
  }
}
export default ReservationTableRow;
