import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ReservationTableRow from "./ReservationRow"
import Button from "react-bootstrap/Button";
import axios from "axios";
class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      resValue: 0
    };
    this.changeData = this.changeData.bind(this);
    this.searchData = this.searchData.bind(this);
  }
  componentDidMount() {
    axios.get('https://cryptic-depths-70075.herokuapp.com/api/res/')
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
  }
  async changeData() {
    const res = await axios.get('https://cryptic-depths-70075.herokuapp.com/api/res/')
        .catch(function (error) {
            console.log(error);
        });
        this.setState({data: res});
  }
  searchData() {
    axios.get('https://cryptic-depths-70075.herokuapp.com/api/res/search/' + this.state.resValue)
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
  }
  handleResIDChange(event) {
    this.setState({ resValue: event.target.value });
  }
  resTable() {
    if (this.state.data) {
    return this.state.data.map((response, i) => {
      return <ReservationTableRow obj={response} key={i} data = {this.changeData} />;
    });
  }
  else return <td>Nothing to show</td>
  }
  render() {
    return (
      <div>
        <Container>
          <InputGroup className="mb-3">
            <InputGroup.Prepend className = "mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Reservation Number
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for a reservation number"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange = {this.handleResIDChange.bind(this)}
            />
            <Button onClick = {this.searchData}>
                Search
              </Button>
          </InputGroup>
        </Container>
        <Container className="mb-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Reservation Type</th>
                <th>Paid Status</th>
                <th>Stay Period</th>
                <th>Reservation End Time</th>
                <th>Confirmation Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data === [] && <td>no data to show</td>}
            {this.state.data !== [] && this.resTable()}             
            </tbody>
          </Table>
        </Container>
        
      </div>
    );
  }
}
export default Reservations;
