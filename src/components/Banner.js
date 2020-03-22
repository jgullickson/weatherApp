import React from "react";
import { connect } from "react-redux";
import { toggleUnits } from "../redux/actions";
import M from "materialize-css";
import logo from "../images/magic-wand.svg";

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div id="app-header" className="z-depth-1">
        <div id="header-content-wrapper">
          <div id='logo-div' className=''>
            <a href="#" className="grey-text text-lighten-5">
              {/* <i className='material-icons' style={bannerStyle.i}>cloud_queue</i> */}
              <h1 id="name">
                weather
                <span id="wizard">wizard</span>
                <img src={logo} id="logo" alt="logo"></img>
              </h1>
            </a>
          </div>
          <div className="switch" id="unit-switch">
            <label>
              &deg;F
              <input
                type="checkbox"
                onChange={() => this.props.toggleUnits()}
              />
              <span className="lever"></span>
              &deg;C
            </label>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleUnits: () => dispatch(toggleUnits())
  };
};

export default connect(null, mapDispatchToProps)(Banner);

// export default Banner;
