/*
* To be used at a later date.
*/
//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class EditWeights extends Component {
  constructor(){
    super();
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.startDateRange = this.startDateRange.bind(this);
    this.endDateRange = this.endDateRange.bind(this);
  this.state = {
    historicDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    dataBar: {
      labels: ["0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800", "0900", "1000", "1100", 
      "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300", "2400"],
      datasets: [
        {
          label: "% Occupancy by Hour",
          data: [20, 20, 18, 10, 45, 80, 90, 75, 72, 78, 72, 75, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20],
          backgroundColor: [
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)"

          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }}
  onFormSubmit(data){
    this.setState({
    dataBar: {
      labels: ["0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800", "0900", "1000", "1100", 
      "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300", "2400"],
      datasets: [
        {
          label: "% Occupancy by Hour",
          data: [10, 20, 10, 30, 30, 50, 60, 40, 30, 30, 42, 45, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20],
          backgroundColor: [
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)"

          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  
  });
  }
  handleDateChange(dateObj){
    this.setState({
      historicDate: dateObj,
    dataBar: {
      labels: ["0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800", "0900", "1000", "1100", 
      "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300", "2400"],
      datasets: [
        {
          label: "% Occupancy by Hour",
          data: [10, 20, 10, 30, 30, 50, 60, 40, 30, 30, 42, 45, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20],
          backgroundColor: [
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(98,  182, 239,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(98,  182, 239, 1)"

          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  
  });
}
startDateRange(dateObj){
this.setState({
  startDate: dateObj
});
}
endDateRange(dateObj){
  this.setState({
    endDate: dateObj
  })
}
    render() {
      return (
        <div>
          <MDBContainer>
        <Form>
          <Row>
            <Col sm="1">
            
          <FormGroup>
          <Input placeholder="0100"> </Input>
          <Input placeholder="0200"> </Input>
          <Input placeholder="0300"> </Input>
          <Input placeholder="0400"> </Input>
          <Input placeholder="0500"> </Input>
          <Input placeholder="0600"> </Input>
          <Input placeholder="0700"> </Input>
          <Input placeholder="0800"> </Input>
          <Input placeholder="0900"> </Input>
          <Input placeholder="1000"> </Input>
          <Input placeholder="1100"> </Input>
          <Input placeholder="1200"> </Input>
          </FormGroup>
          </Col>
          <Col sm="1">
          <FormGroup>
          <Input placeholder="1300"> </Input>
          <Input placeholder="1400"> </Input>
          <Input placeholder="1500"> </Input>
          <Input placeholder="1600"> </Input>
          <Input placeholder="1700"> </Input>
          <Input placeholder="1800"> </Input>
          <Input placeholder="1900"> </Input>
          <Input placeholder="2000"> </Input>
          <Input placeholder="2100"> </Input>
          <Input placeholder="2200"> </Input>
          <Input placeholder="2300"> </Input>
          <Input placeholder="2400"> </Input>
          </FormGroup>
          </Col>
          <Col sm="2"></Col>
          <Col>
              <Row>
              <h3 className="mt-5">Occupancy by Hour</h3>
              <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
              <Row>
                <Col>
                Select Date:
                </Col>
              </Row>
              <Col>
              <DatePicker
                selected={this.state.historicDate}
                onChange={this.handleDateChange}
              ></DatePicker>
              <Row></Row>
              </Col>
              </Row>
            </Col>
          </Row>
          <Row>         
              <DatePicker selected={this.state.startDate}
                          onChange={this.startDateRange}
              ></DatePicker>&nbsp; Start Date Range
          </Row>
          <Row><p/></Row>
          <Row>
              <DatePicker selected={this.state.endDate}
                          onChange={this.endDateRange}
              ></DatePicker>&nbsp; End Date Range
          </Row>
          <Row><p/></Row>
          <Row>
          <Button color="primary" onClick={this.onFormSubmit}>Update Weights</Button>
          </Row>
        </Form>
        </MDBContainer>
        </div>
      )
    }
  }