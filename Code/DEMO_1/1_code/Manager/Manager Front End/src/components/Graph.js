import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
/* Creates Monthly Graph */
class ChartsPage extends React.Component {
    state = {
        dataBar: {
            labels: [
                "Overstays",
                "Reservations",
                "No-Shows",
                "RainChecks",
                "Availabilities",
                "Occupancies",
                "Walk-ins"
            ],
            datasets: [
                {
                    label: "# of Customers",
                    data: [10200, 11900, 3010, 6070, 2940, 3600, 5080],
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)",
                        "rgba(98,  182, 239,0.4)",
                        "rgba(255, 218, 128,0.4)",
                        "rgba(113, 205, 205,0.4)",
                        "rgba(170, 128, 252,0.4)",
                        "rgba(255, 177, 101,0.4)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(255, 218, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)"
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
    };
    /* Renders Monthly Graph */
    render() {
        return (
            <MDBContainer>
                <h3 className="mt-5">Month of March</h3>
                <Bar
                    data={this.state.dataBar}
                    options={this.state.barChartOptions}
                />
            </MDBContainer>
        );
    }
}

export default ChartsPage;
