import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
// import '../css/Controls.css';
import { toggleUnits, toggleMode, getWeatherByManualLocation, getWeatherByGeoLocation } from '../redux/actions';
import Swal from 'sweetalert2';

class Controls extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        M.AutoInit();
        this.setState( { editorText: ''} );
        this.props.getWeatherByGeoLocation();
    }
    handleChange(e){
        this.setState( { editorText: e.target.value } )
    }
    render(){
        return(
            <div id='control-container' className={this.props.cols}>
                    <div className='input-field'>
                        {/* MANUAL FORM */}
                        { this.props.mode === 'manual' &&
                            <div>
                            <label htmlFor='location'>Enter Location</label>
                            <input 
                                type='text'
                                name='location'
                                id='location'
                                value={this.state.editorText}
                                onChange={this.handleChange}
                                className='col s12'
                                />
                            <button 
                                onClick={() => {
                                    if (this.state.editorText === ''){
                                        Swal.fire({
                                            title: "Where now?",
                                            text: "Please specify a location.",
                                            icon: "question"
                                        })
                                    } else {
                                        this.props.getWeatherByManualLocation(this.state.editorText);
                                        this.setState( { editorText: ''} );
                                    }
                                }
                                }
                                
                                >Get Weather</button>
                            </div>
                        }
                        {this.props.mode === 'geo' &&
                            <button 
                            onClick={() => this.props.getWeatherByGeoLocation()}
                            
                            >Refresh <i className='material-icons'>refresh</i></button>
                        }
                            <button 
                                
                                onClick={() => this.props.toggleMode()}
                                
                                >Toggle Mode</button>
                            <button 
                                
                                onClick={() => this.props.toggleUnits()}
                                
                                >Toggle Units</button>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { data, units, mode, isFetching } = state;
    return { 
        data,
        units,
        mode,
        isFetching
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

export default connect(mapStateToProps, mapDispatchToProps)(Controls);

