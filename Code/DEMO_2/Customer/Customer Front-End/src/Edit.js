import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { Component } from "react";
import { useAuth0 } from "./react-auth0-spa";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";
import ReservationTableRow from "./EditRow.js";

function EditReservation(Component) {
  return function WrappedEdit(props) {
    const { loading, user } = useAuth0();
    return <Component {...props} user={user} />;
  };
}

class EditResi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
    };
    this.reservationsTable = this.reservationsTable.bind(this);
    this.changeData = this.changeData.bind(this);
  }

  /* Delete Bill from Database */

  componentDidMount() {
    axios
      .get(
        "https://secure-savannah-03864.herokuapp.com/reservation/email/" +
          this.props.user.email
      )
      .then((response) => {
        this.setState({ reservations: response.data });

        console.log(response);
      });
  }

  changeData() {
    axios
      .get(
        "https://secure-savannah-03864.herokuapp.com/reservation/email/" +
          this.props.user.email
      )
      .then((response) => {
        this.setState({ reservations: response.data });

        console.log(response);
      });
  }

  reservationsTable() {
    if (this.state.reservations != []) {
      return this.state.reservations.map((reservations, i) => {
        return (
          <ReservationTableRow
            email={this.props.user.email}
            obj={reservations}
            key={i}
            reservations={this.changeData}
          />
        );
      });
    } else {
      return (
        <tr>
          <td>All bills are paid</td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div>
        <div class="mutton">
          <Form>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Edit/Cancel</th>
                </tr>
              </thead>
              <tbody>
                {this.state.reservations === null && <td>no data to show</td>}
                {this.state.reservations !== [] && this.reservationsTable()}
              </tbody>
            </Table>
          </Form>
        </div>
      </div>
    );
  }
}

export default EditReservation(EditResi);
