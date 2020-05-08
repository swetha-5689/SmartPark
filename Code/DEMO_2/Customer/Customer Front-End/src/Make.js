import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";

const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay);
const max = new Date(currYear, currMonth + 6, currDay);
let firstload = true;

class Make extends React.Component {
  show = () => {
    this.external.instance.show();
  };

  setExternal = (comp) => {
    this.external = comp;
  };
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      labels: [],
      invalid: [],
      valid: [],
    };
  }

  onPageLoadingSingle = (event, inst) => {
    this.getPrices(event.firstDay, function callback(bookings) {
      inst.settings.labels = bookings.labels;
      inst.settings.invalid = bookings.invalid;
      inst.redraw();
    });
  };

  onPageLoadingMultiple = (event, inst) => {
    this.getBookings(event.firstDay, function callback(bookings) {
      inst.settings.labels = bookings.labels;
      inst.settings.invalid = bookings.invalid;
      inst.redraw();
    });
  };

  getPrices = (d, callback) => {
    var invalid = [],
      labels = [];

    mobiscroll.util.getJson(
      "https://trial.mobiscroll.com/getprices/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (var i = 0; i < bookings.length; ++i) {
          var booking = bookings[i],
            d = new Date(booking.d);

          if (booking.price > 0) {
            labels.push({
              d: d,
              text: "$" + booking.price,
              background: "none",
              color: "#e1528f",
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

  getBookings = (d, callback) => {
    var invalid = [],
      labels = [];

    mobiscroll.util.getJson(
      "https://trial.mobiscroll.com/getbookings/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (var i = 0; i < bookings.length; ++i) {
          var booking = bookings[i],
            d = new Date(booking.d);

          if (booking.nr > 0) {
            labels.push({
              d: d,
              text: booking.nr + " SPOTS",
              background: "none",
              color: "#e1528f",
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

  onInit = (event, inst) => {
    if (firstload) {
      mobiscroll.util.getJson(
        "https://trial.mobiscroll.com/getrecbookings/",
        (times) => {
          // We are loading the available spots from a remote API. The data needs to be parsed and days need to be disabled.
          // In addition to that we'll have to display the number of available spots in lables plus update the time picker to only allow the valid selections.
          // The approach is to invalidate all times and override (make them valid) if that time slot is available for booking. (Think basketball court for two hours)
          var labels = [],
            invalid = [],
            valid = [];

          for (var i = 0; i < times.length; ++i) {
            var time = times[i];
            // set all times to invalid
            invalid = invalid.concat({
              d: "w" + i,
              start: "00:00",
              end: "23:59",
            });

            for (var j = 0; j < time.length; ++j) {
              var t = time[j];
              // override invalid values with valids
              valid = valid.concat({ d: "w" + i, start: t, end: t });
            }

            if (time.length === 0) {
              // set day to invalid if there is no selectable time on that day
              invalid = invalid.concat("w" + [i]);
            } else {
              // add the number of selectable times to labels
              labels = labels.concat({
                d: "w" + i,
                text: time.length + " SPOTS",
                background: "none",
                color: "#e1528f",
              });
            }
          }

          firstload = false;

          this.setState({
            labels: labels,
            invalid: invalid,
            valid: valid,
          });
        },
        "jsonp"
      );
    }
  };

  onDayChange = (event, inst) => {
    this.setState({
      colors: [{ d: "w" + event.date.getDay(), background: "#e1528f" }],
    });
  };

  render() {
    return (
      <mobiscroll.Form className="dms-calendar-booking">
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle></mobiscroll.FormGroupTitle>
          <mobiscroll.Calendar
            display="inline"
            type="hidden"
            controls={["calendar"]}
            min={min}
            max={max}
            yearChange={false}
            responsive={{
              small: {
                months: 1,
              },
              large: {
                months: 2,
              },
            }}
            responsive={{
              large: {
                rows: 7,
                calendarWidth: 400,
              },
            }}
            select="multiple"
            onPageLoading={this.onPageLoadingMultiple}
          />
        </mobiscroll.FormGroup>
        <div>
          <Form>
            <Form.Row>
              <Col>
                <label htmlFor="demo-non-form">Start Time</label>
                <mobiscroll.Time value={now}>
                  <input className="demo-non-form" />
                </mobiscroll.Time>
              </Col>

              <Col>
                <label htmlFor="demo-non-form">End Time</label>
                <mobiscroll.Time value={now}>
                  <input className="demo-non-form" />
                </mobiscroll.Time>
              </Col>
            </Form.Row>
          </Form>

          <div>
            <button onClick={this.show} className="external-button">
              Confirm Reservation
            </button>
          </div>
        </div>
      </mobiscroll.Form>
    );
  }
}
export default Make;
