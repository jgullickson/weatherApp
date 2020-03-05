import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { toggleUnits, getWeatherByManualLocation } from '../redux/actions';

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
            <div id='sub-container' className='col s12 m9 section container' style={weatherStyle}>
                <div id='htmlForm-container'>
                    <div className='input-field row'>
                        <label htmlFor='location'>Enter Location</label>
                        <input 
                            type='text'
                            name='location'
                            id='location'
                            onChange={this.handleChange}
                            className='col s12'
                            />
                        <button 
                            className='btn green lighten-2 col s12 m2'
                            onClick={() => this.props.getWeatherByManualLocation(this.state.editorText)}
                            style={weatherStyle.button}
                            >Get Weather</button>
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
    const { data, units, key } = state;
    return { 
        data: data,
        units: units,
        key: key
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleUnits: () => dispatch(toggleUnits()),
        getWeatherByManualLocation: (updatedLocation) => { dispatch(getWeatherByManualLocation(updatedLocation)) }
    }
}

const weatherStyle = {
    button: {
        display: 'block'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

//make api call in action and update store state
//map state to props


