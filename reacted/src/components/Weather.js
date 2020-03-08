import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { toggleUnits, toggleMode, getWeatherByManualLocation, getWeatherByGeoLocation } from '../redux/actions';

class Weather extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        M.AutoInit();
        this.setState( { editorText: ''} )
    }
    handleChange(e){
        this.setState( { editorText: e.target.value } )
    }
    render(){
        return (
            <div id='weather-component-container' className='col s12 m9 section container' style={weatherStyle}>
                <div id='display-container' style={weatherStyle.display}>
                    {this.props.data.location && this.props.data.current &&
                    <div>
                            <div id='location-container'>
                                <h2 id='location-title' style={weatherStyle.condition.h2}>{this.props.data.location.name}</h2>
                                <span id='location-region'>{this.props.data.location.region}, </span>
                                <span id='location-country'>{this.props.data.location.country}</span>
                            </div>
                            <div id='weather-container'>
                                <div className='condition-summary' style={weatherStyle.condition}>
                                    <img id='weather-icon' src={this.props.data.current.condition.icon}/>
                                    <div>
                                        <div id='weather-condition'>{this.props.data.current.condition.text}</div>
                                        <div id='temp'>
                                            {this.props.units == 'imperial' && this.props.data.current.temp_f}
                                            {this.props.units == 'imperial' && <span>&deg;F</span>}
                                            {this.props.units == 'metric' && this.props.data.current.temp_c}
                                            {this.props.units == 'metric' && <span>&deg;C</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="condition-details">
                                    <ul id='weather-condition'>
                                        <li id='feel'>
                                            <span className='label'>Feels like: </span>
                                            {this.props.units == 'imperial' && this.props.data.current.feelslike_f}
                                            {this.props.units == 'imperial' && <span>&deg;F</span>}
                                            {this.props.units == 'metric' && this.props.data.current.feelslike_c}
                                            {this.props.units == 'metric' && <span>&deg;C</span>}
                                        </li>
                                        <li id='wind'>
                                            <span className='label'>Wind: </span>
                                            {this.props.units == 'imperial' && this.props.data.current.wind_mph + ' mph'}
                                            {this.props.units == 'metric' && this.props.data.current.wind_kph + ' kph'}
                                        </li>
                                        <li id='uv'>
                                            <span className='label'>UV index: </span>
                                            {this.props.data.current.uv}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }

                </div>
                <div id='control-container' style={weatherStyle.control}>
                    <div className='input-field row'>
                        {/* MANUAL FORM */}
                        { this.props.mode === 'manual' &&
                            <div>
                            <label htmlFor='location'>Enter Location</label>
                            <input 
                                type='text'
                                name='location'
                                id='location'
                                onChange={this.handleChange}
                                className='col s12'
                                />
                            <button 
                                className='btn green lighten-2 col s12 m3'
                                onClick={() => this.props.getWeatherByManualLocation(this.state.editorText)}
                                style={weatherStyle.button}
                                >Get Weather</button>
                            </div>
                        }
                        {this.props.mode === 'geo' &&
                            <button 
                            className='btn purple lighten-2 col s12 m3'
                            onClick={() => this.props.getWeatherByGeoLocation()}
                            style={weatherStyle.button}
                            >GeoLocation</button>
                        }
                            <button 
                                className='btn red lighten-2 col s12 m3'
                                onClick={() => this.props.toggleMode()}
                                style={weatherStyle.button}
                                >Toggle Mode</button>
                            <button 
                                className='btn red lighten-2 col s12 m3'
                                onClick={() => this.props.toggleUnits()}
                                style={weatherStyle.button}
                                >Toggle Units</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { data, units, mode } = state;
    return { 
        data: data,
        units: units,
        mode: mode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleUnits: () => dispatch(toggleUnits()),
        getWeatherByManualLocation: (location) => dispatch(getWeatherByManualLocation(location)),
        getWeatherByGeoLocation: () => dispatch(getWeatherByGeoLocation()),
        toggleMode: () => dispatch(toggleMode())
    }
}

const weatherStyle = {
    button: {
        display: 'block'
    },
    control: {
        bottom: 0
    },
    condition: {
        display: 'flex',
        fontSize: '2em',
        h2: {
            margin: 0
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

//make api call in action and update store state
//map state to props


