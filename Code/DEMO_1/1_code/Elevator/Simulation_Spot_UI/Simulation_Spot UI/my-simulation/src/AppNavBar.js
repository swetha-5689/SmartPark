import React, { Component } from "react"; //import the necessary libraries in JS like react
import SmartPark from "./SmartPark.png"; //import the picture that is used in the nav bar
//component page
class navbar extends Component {
  //this is the class to make the navigation bar component
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          className="d-inline-block"
          style={{
            height: 75,
            width: "100%",
            backgroundColor: "rgba(255,0,0,1.0)"
          }} //making the nav bar the color red using this style attribute
        >
          <img
            src={SmartPark} //manipulating the attributes of the picture in the nav bar
            class="rounded float-right"
            height="100%"
            alt="SmartPark Logo"
          />
          <div
            className="shadow p-3 mb-5 rounded" //changing the attributes
            style={{ height: 75, width: "100%" }}
          >
            <div
              className="text-white text-left" //changing the style of the text
              style={{ fontSize: 20, marginTop: 6 }}
            >
              <strong>SmartPark Technologies</strong>{" "}
              {/* making the text bold in addition to add the styles above */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default navbar;
