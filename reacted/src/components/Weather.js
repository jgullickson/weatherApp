import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { toggleUnits } from '../redux/actions';

class Weather extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.getWeatherByLocation = this.getWeatherByLocation.bind(this);
    }
    componentDidMount(){
        M.AutoInit();
    }
    handleChange(){
        console.log('handleChange')
    }
    getWeatherByLocation(){
        console.log('getWeatherByLocation')
    }
    render(){
        return (
            <div id='sub-container' className='col s12 m9 section'>
                <div id='htmlForm-container'>
                    <div className='input-field'>
                        <label htmlFor='location'>Enter Location</label>
                        <input type='text' name='location' id='location' onChange={this.handleChange}/>
                        <button className='btn' onClick={this.getWeatherByLocation}>Get Weather</button>
                        <button className='btn' onClick={this.props.toggleUnits}>Toggle Units</button>
                        <h1>{this.props.units}</h1>
                    </div>
                </div>
                <div id='data-container'>
                    <div id='location-container'>
                        <h2 id='location-title'></h2>
                        <span id='location-region'></span><span id='location-country'></span>
                    </div>
                    <div id='weather-container'>
                        <div className='condition-summary'>
                            <img id='weather-icon'/>
                            <div>
                                <div id='weather-condition'></div>
                                <div id='temp'></div>
                            </div>
                        </div>
                        <div className="condition-details">
                            <ul id='weather-condition'>
                                <li id='feel'></li>
                                <li id='wind'></li>
                                <li id='uv'></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { data, units } = state;
    return { 
        data: data,
        units: units
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleUnits: () => dispatch(toggleUnits())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);