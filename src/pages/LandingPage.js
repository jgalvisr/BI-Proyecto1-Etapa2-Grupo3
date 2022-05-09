import React from "react";
import "./LandingPage.css"
import navbarLogo from "../assets/HealthCheck-logos_black.png"
import row1Img from "../assets/doctor-appointment.jpg"

export const LandingPage = () => {
  return (
    <>
    <nav className="navbar g-0">
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
      <div className="row" id="api-row">
        <h1>TRY OUR SERVICES</h1>
        <p id="service-paragraph">Select the service you want to try below.</p>
        <ul className="nav nav-pills nav-fill" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="predict-tab" data-bs-toggle="tab" data-bs-target="#nav-predict" type="button" role="tab">Illness prediction</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className="nav-link" id="test-tab" data-bs-toggle="tab" data-bs-target="#nav-test" type="button" role="tab">Model quality metrics</button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="nav-predict" role="tabpanel">
          Predict API service
        </div>
        <div className="tab-pane fade" id="nav-test" role="tabpanel">
          Test API service
        </div>
      </div>
        
    </>
  );
}