import React, { useState } from "react";
import "./ServiceComponent.css"

const PREDICT_API = "";
const TEST_API = "";

export const ServiceComponent = () => {

  const [ abstract, setAbstract ] = useState("");
  const [ condition, setCondition ] = useState("");
  const [ file, setFile ] = useState(null);

  const handlePredictInput = (event) => {
    event.preventDefault();
    setAbstract("");
    setAbstract(event.target.value);
  }

  const handlePredictSubmit = async (event) => {
    event.preventDefault();
    console.log(abstract);

    /* const rawResp = await fetch(
      PREDICT_API, {
        body: {
          medical_abstract: abstract
        }
      }
    );
    const predictResp = await rawResp.json();
    setCondition(predictResp); */
    setCondition("Cardiovascular disease");
  }

  const handlePredictReset = () => {
    setAbstract("");
    setCondition("");
  }

  const handleTestSubmit = async (event) => {
    event.preventDefault();
    /* console.log(file); */
  }

  const handleTestInput = async (event) => {
    event.preventDefault();
    /* const newFile = await JSON.parse(event.target.files[0])
    setFile(newFile); */
  }

  return (
    <>
      <div className="row" id="api-row">
        <h1>TRY OUR SERVICES</h1>
        <p id="service-paragraph">Select the service you want to try below.</p>
        <ul className="nav nav-pills nav-fill" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="predict-tab" data-bs-toggle="tab" data-bs-target="#nav-predict" type="button" role="tab">Illness prediction</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="test-tab" data-bs-toggle="tab" data-bs-target="#nav-test" type="button" role="tab">Model quality metrics</button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="nav-predict" role="tabpanel">
            <h2>Predict an illness based on a physician's observations</h2>
            <p>
              Write below the physician's observations, press the <i>submit</i> button and wait a few seconds 
              for the model to determine the corresponding illness.
            </p>
            <form onSubmit={handlePredictSubmit} onReset={handlePredictReset}>
              <textarea cols="40" rows="5" id="predict-textbox" onChange={handlePredictInput}/>
              <button className="btn btn-warning" type="submit" disabled={abstract ? false : true}>Submit</button>
              <button className="btn btn-danger" type="reset">Reset</button>
            </form>
            <h4 id="condition-paragraph" style={{display: condition ? "block" : "none"}}>Condición predicha: <b>{condition}</b></h4>
          </div>
          <div className="tab-pane fade" id="nav-test" role="tabpanel">
          <h2>Verify the quality and metrics of our model</h2>
          <p>
            Select a .json file from your computer containing a set of medical abstracts and corresponding diagnoses. 
            Our model will predict each condition and calculate a score depending on how many it got right.
          </p>
          <input type="file" accept=".json" onChange={handleTestInput}/>
          <button className="btn btn-warning" onClick={handleTestSubmit}>
            Upload
          </button>
          </div>
        </div>
      </div>
    </>
  )
}
