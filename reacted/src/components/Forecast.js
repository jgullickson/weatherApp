import React from 'react';

class Forecast extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let days = this.props.forecast.forecastday.length;
        return (
            <div id='forecast-container'>
                {this.props.forecastday.map(day => {

                })}
            </div>

        )
    }

}

export default Forecast;