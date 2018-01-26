import React from 'react';
import './verification.css';

const Verification = ({verify}) => {
    return(
        <div className="verificationWrapper">
            <div id="textBox">
            Lorem ipsum etc etc
            </div>
            <div id="bankIdBod"></div>
            <div id="verification" className="verification" >
                <button className="green-button" onClick={()=>{verify()}}>Verifiser meg</button>
            </div>
        </div>
    );
}

export default Verification;