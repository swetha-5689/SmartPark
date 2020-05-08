import "./Billing.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { Component } from "react";
import { useAuth0 } from "./react-auth0-spa";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";

function BillingFunctionIDK(Component) {
  return function WrappedBilling(props) {
    const { loading, user } = useAuth0();
    return <Component {...props} user={user} />;
  };
}

class EditBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billing: [],
    };
    this.billingTable = this.billingTable.bind(this);
    this.deleteBilling = this.deleteBilling.bind(this);
  }

  /* Delete Bill from Database */
  deleteBilling() {
    axios
      .delete(
        "https://secure-savannah-03864.herokuapp.com/Billing/email/" +
          this.props.user.email
      )
      .then((response) => {
        this.setState({ billing: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(true);
    this.render();
  }

  componentDidMount() {
    axios
      .get(
        "https://secure-savannah-03864.herokuapp.com/Billing/email/" +
          this.props.user.email
      )
      .then((response) => {
        this.setState({ billing: response.data });

        console.log(response);
      });
  }

  billingTable() {
    if (this.state.billing != []) {
      return this.state.billing.map((billing, i) => {
        return (
          <tr>
            <td>${billing.currentDues}</td>
            <td>
              <Moment format="YYYY MMMM Do">{billing.dateofDues}</Moment>{" "}
            </td>
            <td>{billing.description}</td>
          </tr>
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
        <div class="page">
          <Form>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Current Dues</th>
                  <th>Date of Dues</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.billing === null && <td>no data to show</td>}
                {this.state.billing !== [] && this.billingTable()}
              </tbody>
            </Table>
            <Button variant="danger" onClick={this.deleteBilling}>
              Pay Now!
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default BillingFunctionIDK(EditBilling);
