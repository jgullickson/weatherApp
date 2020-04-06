import  React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import moment from 'moment';
import M from "materialize-css";

const Chart = (props) => {

  const ref = useRef();

  const svgProperties = {
      height: 500,
      width: 800,
      padding: 30
  }

  const [selected_feature, updateSelectedFeature] = useState();


  useEffect( ()=> {

    //clear old chart
    d3.selectAll("svg > *").remove();
    
    //initialize materialize for dropdown
    M.AutoInit();

    const svgElement = d3.select(ref.current);

    const h = svgProperties.height;
    const w = svgProperties.width;
    const p = svgProperties.padding;
    
    const data = props.forecast.forecastday || [];
    const momentized = [
        {
            date: moment().format('YYYY-MM-DD')
        },
        {
            date: moment().add(6, 'days').format('YYYY-MM-DD')
        }
    ];
    console.log(momentized)
    // console.log(data)

    // const mindate = data[0]['date'] || 0;
    // const maxdate = data[data.length - 1]['date'] || 7;
    // console.log(mindate)
    // console.log(maxdate)

    const scaleX = d3.scaleLinear()
                    // .domain([mindate, maxdate])
                    .domain([0, data.length])
                    .range([p, w-p])

    const scaleY = d3.scaleLinear()
                    .domain([d3.min(data, d => d['day'][selected_feature]), d3.max(data, d => d['day'][selected_feature])])
                    .range([h - p, p]);

    const xAxis = d3.axisBottom(scaleX)
                    .ticks(data.length, "s")
    const yAxis = d3.axisLeft(scaleY);

    svgElement.append("g")
                .attr("transform", `translate(0, ${h - p})`)
                .call(xAxis)
    
    svgElement.append("g")
                .attr("transform", `translate(${p}, 0)`)
                .call(yAxis)

    svgElement.append("text")
                .attr("transform", `translate(50, ${p})`)
                .attr("class", "chart-legend")
                .text(selected_feature)
    
    svgElement.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("class", "chart-stroke")
                .attr("stroke-width", 4)
                .attr("d", d3.line()
                            .x((d,i) => scaleX(i))
                            .y(d => scaleY(d['day'][selected_feature]))
                )
  });

  let features = [];
  if (props.forecast.forecastday){
    features = Object.keys(props.forecast.forecastday[0]['day']).filter(f => f !== 'condition');
  }
  return (
    <div id ='chart-container'>
    <h2 id='chart-title'>Forecast Graphs</h2>
    <div id='chart-flex'>
        <svg
            viewBox='0 0 800 500'
            id='chart' 
            ref={ref}
            height={svgProperties.height}
            width={svgProperties.width}>
        </svg>
        <div id='feature-container'>
            <div className='input-field' id='feature-select'>
                <select
                    defaultValue='Select Forecast Feature'
                    onChange={(e) => updateSelectedFeature(e.target.value)}>
                    <option disabled>Select Forecast Feature</option>
                    {features.map((feat, ind) => {
                        return <option className='feature' key={ind}>{feat}</option>
                    })}
                </select>
            </div>
        </div>
    </div>
    </div>
  )
};

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        forecast: data.forecast
    }
}

export default connect(mapStateToProps)(Chart);