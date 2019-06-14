import React from "react";
import "./App.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Button } from "reactstrap";
import GitHubIcon from "./Git-Icon-Black.png";
import linkedin from "./linkedin.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: "c",
      temp: 10
    };
  }

  updatedTempCelsius = event => {
    this.setState({
      scale: "c",
      temp: event.target.value
    });
  };

  updatedTempFahrenheit = event => {
    this.setState({
      scale: "f",
      temp: event.target.value
    });
  };

  resetClick = () => {
    this.setState({
      scale: "c",
      temp: 0
    });
  };

  render() {
    const temp = this.state.temp;
    const scale = this.state.scale;
    const celsius = scale == "f" ? (temp - 32) * (5 / 9) : temp;
    const fahrenheit = scale == "c" ? temp * (9 / 5) + 32 : temp;
    return (
      <div className="App">
        <div className="contTitle">
          <h1 className="title" style={{ textAlign: "center" }}>
            A celsius/fahrenheit converter App
          </h1>
        </div>
        <hr />
        <Grid fluid>
          <Row center="xs">
            <Col className="thermos" xs={1}>
              <div className="thermoC">
                <div className="celsiusContainer">
                  <Row xs={1}>
                    <div
                      className="celsiusBall"
                      style={{ height: `${this.state.temp * 4}px` }}
                    >
                      ºC
                    </div>
                  </Row>
                </div>
              </div>
              <ul className="container">
                <li>
                  <p style={{ width: "10px" }}>100ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>90ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>80ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>70ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>60ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>50ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>40ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>30ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>20ºC</p>
                </li>
                <li>
                  <p style={{ width: "10px" }}>10ºC</p>
                </li>
              </ul>
            </Col>
            <Col xs={3}>
              <div className="resultContainer">
                <div className="CelsisusContainer">
                  <h2>Insert Celsius</h2>
                  <input
                    className="C_input"
                    id="c"
                    type="number"
                    value={celsius}
                    onChange={this.updatedTempCelsius}
                  />
                </div>
                <div className="farhenContainer">
                  <h2 className="farlable">Insert Fahrenheit</h2>

                  <input
                    onChange={this.updatedTempFahrenheit}
                    className="F_input"
                    id="f"
                    type="number"
                    value={fahrenheit}
                  />
                  <div className="btnreset">
                    <Button className="reset" onClick={this.resetClick}>
                      Reset to 0ºC
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        <div className="footer">
          <hr />
          <a href="http://dermotboyle.github.io">
            <img className="github" src={GitHubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/boyledermot/">
            <img className="linkedin" src={linkedin} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
