import React from "react";
import "./Home.css";
import { useAuth0 } from "./react-auth0-spa";

function Home() {
  const { loading, user } = useAuth0();

  if (user) {
    return (
      <div class="header">
        <p>Welcome to SmartPark, {user.name}!!!!!!</p>
      </div>
    );
  }

  return (
    <div class="header">
      <p>Welcome to SmartPark</p>
    </div>
  );
}
export default Home;

// BRUH LETS GOOOOOO SCREW YOU MARSIC (jk but not jk :() )
