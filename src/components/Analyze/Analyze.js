import React from 'react';
import './Analyze.css';

const Analyze = ({callback}) => {
    return (<div className="main-wrapper">
        <button className="green-button" onClick={()=> {callback();}} >Analyser min økonomi</button>
    </div> )
}

export default Analyze;