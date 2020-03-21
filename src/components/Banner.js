import React from 'react';
import M from 'materialize-css';
import logo from '../images/magic-wand.svg';

class Banner extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return (
            <div id='app-header' className='z-depth-1' >
                <a href='#' className='grey-text text-lighten-5'>
                    {/* <i className='material-icons' style={bannerStyle.i}>cloud_queue</i> */}
                    <h1>weather
                    <span id='wizard'>wizard</span>
                    <img 
                        src={logo} 
                        id='logo' 
                        alt='logo'
                    ></img>
                    </h1>
                </a>
            </div>   
        )
    }
}

export default Banner;