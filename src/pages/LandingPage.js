import React from "react";
import "./LandingPage.css"
import navbarLogo from "../assets/HealthCheck-logos_black.png"
import { ServiceComponent } from "../components/ServiceComponent";

export const LandingPage = () => {
  return (
    <>
    <nav className="navbar p-0">
      <div className="container-fluid" id="navbar">
        <img src={navbarLogo} width={"150px"} />
      </div>
    </nav>
      <div className="row" id="title-row">
        <h1>THE FUTURE OF MEDICAL DIAGNOSIS</h1>
        <p id="intro-paragraph">Welcome to HealthCheck, the world's first fully automated service capable 
           of detecting up to <b>five</b> different illnesses based on a doctor's exam abstract. Our 
           solution is powered by a machine learning model developed with the latest techniques and 
           algorithms and trained with a database containg more than 15000 real-life abstracts and diagnoses. 
           Learn more below about our organization or try our solution yourself, <b>absolutely free!</b></p>
      </div>
      <ServiceComponent />
    </>
  );
}