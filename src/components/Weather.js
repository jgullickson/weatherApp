import React from "react";
import { connect } from "react-redux";
import {
  refresh
} from "../redux/actions";
import Forecast from "./Forecast";
import Controls from "./Controls";
// import '../css/Weather.css';

class Weather extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div id="weather-component-container" className="section">
        {this.props.isFetching ? (
          <div id="spinner-container">
            <div id="fetchSpinner" />
          </div>
        ) : null}
        <div className="row">
          <div id="display-container" className="col s12 m6">
            {this.props.data.location && this.props.data.current && (
              <div className="card-content">
                <div id="location-container">
                  <h2 id="location-title">{this.props.data.location.name}</h2>
                  <span id="location-region">
                    {this.props.data.location.region},{" "}
                  </span>
                  <span id="location-country">
                    {this.props.data.location.country}
                  </span>
                </div>
                <div id="weather-container">
                  <div className="condition-summary">
                    <img
                      id="weather-icon"
                      src={this.props.data.current.condition.icon}
                      alt={`${this.props.data.current.condition.text} icon`}
                    />
                    <div>
                      <div id="weather-condition">
                        {this.props.data.current.condition.text}
                      </div>
                      <div id="temp">
                        {this.props.units === "imperial" &&
                          this.props.data.current.temp_f}
                        {this.props.units === "imperial" && <span>&deg;F</span>}
                        {this.props.units === "metric" &&
                          this.props.data.current.temp_c}
                        {this.props.units === "metric" && <span>&deg;C</span>}
                      </div>
                    </div>
                  </div>
                  <div className="condition-details">
                    <ul id="weather-condition" className="">
                      <li id="feel" className="">
                        <span className="label">Feels like: </span>
                        {this.props.units === "imperial" &&
                          this.props.data.current.feelslike_f}
                        {this.props.units === "imperial" && <span>&deg;F</span>}
                        {this.props.units === "metric" &&
                          this.props.data.current.feelslike_c}
                        {this.props.units === "metric" && <span>&deg;C</span>}
                      </li>
                      <li id="wind" className="">
                        <span className="label">Wind: </span>
                        {this.props.units === "imperial" &&
                          this.props.data.current.wind_mph + " mph "}
                        {this.props.units === "metric" &&
                          this.props.data.current.wind_kph + " kph "}
                        <span>{this.props.data.current.wind_dir}</span>
                      </li>
                      <li id="uv" className="">
                        <span className="label">UV index: </span>
                        {this.props.data.current.uv}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <button 
                id='refresh-btn'
                onClick={() => this.props.refresh()}>
              <i className="material-icons">refresh</i>
            </button>
          </div>
          <Controls cols="col s12 m6" />
        </div>
        <Forecast cols="col s12" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, units, mode, isFetching } = state;
  return {
    data,
    units,
    mode,
    isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
   refresh: () => dispatch(refresh())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

//make api call in action and update store state
//map state to props
