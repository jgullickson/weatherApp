import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import moment from 'moment';
import '../css/Forecast.css';
import high_arrow from '../images/high_arrow.svg';
import low_arrow from '../images/low_arrow.svg';
import drop from '../images/raindrop.svg';
import wind from '../images/wind.svg';
import humidity from '../images/humidity.svg';


class Forecast extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        // console.log(this.props.forecast.forecastday)
        // let days = this.props.data.forecast.forecastday.length;
        return (
            <div id='forecast-container' className={this.props.cols}>
                {this.props.forecast.forecastday &&
                this.props.forecast.forecastday.map((f, i) => {
                    return(
                        <div key={i} className={'day card transparent'}>
                            <div className='card-content'>
                                <span className="card-title activator"><i className="material-icons right">keyboard_arrow_down</i></span>
                                <div>{moment(f.date).format('ddd')}</div>
                                <div>{moment(f.date).format('MM/DD')}</div>
                                <div><img src={f.day.condition.icon}/></div>
                                <div className='teal-text text-lighten-4'>{this.props.units === 'imperial' ? f.day.avgtemp_f : f.day.avgtemp_c}&deg;{this.props.units === 'imperial' ? 'F' : 'C'}</div>
                                <div>{f.day.condition.text}</div>
                            </div>
                            <div className='card-reveal'>
                                <ul className='collection'>
                                    <li className='collection-item'><span className='label'><img src={high_arrow}/></span>{this.props.units === 'imperial' ? f.day.maxtemp_f : f.day.maxtemp_c}&deg;{this.props.units === 'imperial' ? 'F' : 'C'}</li>
                                    <li className='collection-item'><span className='label'><img src={low_arrow}/></span>{this.props.units === 'imperial' ? f.day.mintemp_f : f.day.mintemp_c}&deg;{this.props.units === 'imperial' ? 'F' : 'C'}</li>
                                    <li className='collection-item'><span className='label'><img src={humidity}/></span>{f.day.avghumidity + '%'}</li>
                                    <li className='collection-item'><span className='label'><img src={drop}/></span>{this.props.units === 'imperial' ? f.day.totalprecip_in : f.day.totalprecip_mm}&deg;{this.props.units === 'imperial' ? 'in' : 'mm'}</li>
                                    <li className='collection-item'><span className='label'><img src={wind}/></span>{this.props.units === 'imperial' ? f.day.maxwind_mph : f.day.mapwind_kph}{this.props.units === 'imperial' ? 'mph' : 'kph'}</li>
                                    <li className='collection-item'><span className='label uv'>UV</span>{f.day.uv}</li>
                                </ul>
                                <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    const { units, data } = state;
    return {forecast: data.forecast, units: units }
} 

export default connect(mapStateToProps)(Forecast);

/*

*/