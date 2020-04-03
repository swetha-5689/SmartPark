import React from "react";
import loading from "../assets/loading.svg";

//Loading Spinner for Login
const Loading = () => (
    <div className="spinner">
        <img src={loading} alt="Loading" />
    </div>
);

export default Loading;
