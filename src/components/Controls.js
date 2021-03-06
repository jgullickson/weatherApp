import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
// import '../css/Controls.css';
import { toggleUnits, getWeatherByManualLocation, getWeatherByGeoLocation, refresh } from '../redux/actions';
import Swal from 'sweetalert2';

class Controls extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = { editorText: ''};
    }
    componentDidMount(){
        M.AutoInit();
        this.props.getWeatherByGeoLocation();
    }
    handleChange(e){
        this.setState( { editorText: e.target.value } )
    }
    render(){
        return(
            <div id='control-container' className={this.props.cols}>
                    <div className='input-field'>
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
                                id='search-btn'
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
                                >Search <i className='material-icons'>search</i></button>
                            </div>
                            <button 
                                id='geo-btn'
                                onClick={() => this.props.getWeatherByGeoLocation()}
                            >My Location <i className='material-icons'>gps_fixed</i>
                            </button>
                          
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
        refresh: () => dispatch(refresh())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);

