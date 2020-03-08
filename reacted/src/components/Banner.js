import React from 'react';
import M from 'materialize-css';
import logo from '../wizard.svg';

class Banner extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return (
            <div id='app-header' className='z-depth-1 indigo lighten-2' style={bannerStyle}>
                <a href='#' style={bannerStyle.a} className='grey-text text-lighten-5'>
                    <img 
                        src={logo} 
                        id='logo' 
                        alt='logo'
                        style={bannerStyle.logo}
                        ></img>
                    {/* <i className='material-icons' style={bannerStyle.i}>cloud_queue</i> */}
                    <h1 className='grey-text text-lighten-5' style={bannerStyle.h1}>weather<span className='green-text text-lighten-2'>wizard</span></h1>
                </a>
            </div>   
        )
    }
}

const bannerStyle = {
    fontFamily: 'Oxanium, sans-serif',
    background: 'linear-gradient(90deg, black, #0d47a190, #1e88e590)',
    padding: '0.5em',
    margin: 'auto',
    a: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    h1: {
        fontSize: '3rem',
        userSelect: 'none',
        margin: '0 0.25em',
        display: 'block'
    },
    i: {
        fontSize: '3rem',
        display: 'block'
    },
    logo: {
        height: '3rem',
        marginBottom: '10px'
    }
}

export default Banner;