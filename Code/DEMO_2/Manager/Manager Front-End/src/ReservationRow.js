import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Moment from 'react-moment';


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
  }

  hideModal = () => {
    this.setState({ show: false });
  }
  async deleteRes() {
    const res = await axios.delete("https://cryptic-depths-70075.herokuapp.com/api/res/" 
    + this.props.obj._id)
      .catch(error => {
        console.log(error);
      });
    this.setState({data: res});
    this.hideModal();
    this.props.data();
    window.location.reload(true);
  }
  componentDidMount() {
    axios
      .get("https://cryptic-depths-70075.herokuapp.com/api/res/")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  render() {
    return (
        <>
    <Modal show={this.state.show} onHide={this.hideModal}>
      <Modal.Header>
        <Modal.Title>Confirm delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          Are you sure you want to delete this reservation?
          The customer will be notified.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideModal}>Cancel</Button>
        <Button variant = "danger" onClick={this.deleteRes}>Confirm Delete</Button>
      </Modal.Footer>
    </Modal>
      <tr data-testid="row">
        <td>{this.props.obj.custFName}</td>
        <td>{this.props.obj.custLName}</td>
        <td>{this.props.obj.type}</td>
        <td>{this.props.obj.Paid.toString()}</td>
        <td>
        <Moment format = "MMMM Do YYYY, h:mm:ss">{this.props.obj.startTime}</Moment> - {this.props.obj.endTime &&<Moment format = "MMMM Do YYYY, h:mm:ss">{this.props.obj.endTime}</Moment>}
        </td>
        <td><Moment format = "MMMM Do YYYY, h:mm:ss">{this.props.obj.reserveTime}</Moment></td>
        <td>{this.props.obj.resID.toString()}</td>
        <td>
          <Button size="sm" variant="danger" onClick={this.showModal}>
            Delete
          </Button>
          {!this.props.obj.Paid && (
            <Button size="sm" variant="primary">
              Bill
            </Button>
          )}
        </td>
      </tr>
      </>
    );
  }
}
export default ReservationTableRow;
