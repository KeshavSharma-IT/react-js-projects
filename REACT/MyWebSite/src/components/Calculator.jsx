import React, { useState } from "react";

function Calculator() {
  const [valOne, setValone] = useState();
  const [valSecond, setValsecond] = useState();
  const [result, setResult] = useState();
  const [method, setMethod] = useState("");

  const Add = () => {
    console.log(valOne + "," + valSecond);
    setResult(parseInt(valOne) + parseInt(valSecond));
    setMethod("adding");
  };

  const Mul = () => {
    console.log(valOne + "," + valSecond);
    setResult(parseInt(valOne) * parseInt(valSecond));
    setMethod("multiplying");
  };

  const Substract = () => {
    console.log(valOne + "," + valSecond);
    setResult(parseInt(valOne) - parseInt(valSecond));
    setMethod("substracting");
  };

  const Devide = () => {
    console.log(valOne + "," + valSecond);
    setResult(parseInt(valOne) / parseInt(valSecond));
    setMethod("deviding");
  };

  return (
    <div>
      <div className="constainer p-4 row">
        <div className="col-6">
          <div className="form-group">
            <label>Enter First number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First number"
              value={valOne}
              onChange={(e) => setValone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Enter Second number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Second number"
              value={valSecond}
              onChange={(e) => setValsecond(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="constainer mx-5  row">
        <div className="col-6">
          <button type="button" className="btn btn-primary mx-2" onClick={Add}>
            Add
          </button>
          <button type="button" className="btn btn-primary mx-2" onClick={Mul}>
            Multiply
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={Substract}
          >
            Substract
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={Devide}
          >
            devide
          </button>
        </div>
        <div className="col-6 form-group">
          <label className="">Result</label>
          <input type="text" className="form-control" value={result} readOnly />
          {result >= 0 && (
            <span className="text-primary  text-capitalize">
              {valOne} and {valSecond} after {method} gives us {result}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
