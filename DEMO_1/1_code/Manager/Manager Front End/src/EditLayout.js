import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import ParkingSpot from "./ParkingSpot";
import axios from "axios";
import Col from "react-bootstrap/Col";

/* EditLayout is for Garage Overview. It connects to the MongoDB Floor and Spots Collections. Displays Current Garage Layout */
class EditLayout extends React.Component {
    /* EditLayout class constructor */
    constructor(props) {
        super(props); //handles calls to the parent constructor
        this.getData = this.getData.bind(this); //bind getData with this
        this.getFloors = this.getFloors.bind(this); //bind getFloors with this
        //this.getLayout = this.getLayout.bind(this);
        this.state = {
            //state property has data array and floors array
            data: [],
            floors: []
        };
    }
    componentDidMount() {
        //gets Floors with state property
        axios
            .get("http://localhost:4000/api/floors/")
            .then(response => {
                this.setState({ floors: response.data });
            })
            .catch(error => {
                console.log(error);
            });
        //gets Spots with state property
        axios
            .get("http://localhost:4000/api/spots/")
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    //gets Spots on Floors
    getData(floorNum) {
        axios
            .get("http://localhost:4000/api/spots/floor/" + floorNum)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    //gets and maps Floors
    getFloors() {
        return this.state.floors.map((response, i) => {
            return (
                <>
                    <tr>
                        <th obj={response}>
                            Floor {this.state.floors[i].number}
                        </th>
                    </tr>
                    <Col>
                        <ParkingSpot
                            key={i}
                            floorNumber={this.state.floors[i].number}
                        />{" "}
                    </Col>
                </>
            );
        });
    }
    //renders floors on site
    render() {
        return (
            <Container className="mb-4">
                <Table style={{ height: 1 }} class="align-baseline">
                    {this.getFloors()}
                </Table>
            </Container>
        );
    }
}
export default EditLayout;
