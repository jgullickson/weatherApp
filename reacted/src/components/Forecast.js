import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../css/Forecast.css';

class Forecast extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.forecast.forecastday)
        // let days = this.props.data.forecast.forecastday.length;
        return (
            <div id='forecast-container' className={this.props.cols}>
                {this.props.forecast.forecastday &&
                this.props.forecast.forecastday.map((f, i) => {
                    return(
                        <div key={i} className='day'>
                            <div>{moment(f.date).format('MM/DD')}</div>
                            <div><img src={f.day.condition.icon}/></div>
                            <div>{f.day.condition.text}</div>
                        </div>
                    )
                })}
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    const { units, data } = state;
    return {forecast: data.forecast }
} 

export default connect(mapStateToProps)(Forecast);

/*

*/