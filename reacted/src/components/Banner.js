import React from 'react';

// Import Materialize
import M from 'materialize-css';

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
                    <i className='material-icons' style={bannerStyle.i}>cloud_queue</i>
                    <h1 className='grey-text text-lighten-5' style={bannerStyle.h1}>weather<span className='green-text text-lighten-2'>info</span></h1>
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
        fontSize: '3rem'
    }
}

export default Banner;


//     h1 {
//         font-size: 4rem;
//         user-select: none;
//         margin: 0 0.25em;
//         @extend .grey-text, .text-lighten-5;
//         display: block;
//     }
//     i {
//         font-size: 4rem;
//         @extend .grey-text, .text-lighten-5;
//         display: block;
//     }
// }