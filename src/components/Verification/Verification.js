import React from 'react';
import './verification.css';
import bankidMobil from './bankIdmobil.jpg';
import bankid from './bankIdver.png';

const Verification = ({verify}) => {
    return(
        <div className="verificationWrapper">
            <h2>Gi oss tilgang</h2>
            <div id="textBox">
            <p>Vi henter ut din informasjon om dine lån og din selvangivelse helt
                automagisk. Denne dataen vil vi bruke til å gi deg oversikt og noen
                gode råd på veien
            </p>
            </div>
            <div className="bankId" id="bankIdBod">
             <img src={bankid}/>
            </div>
            <div id="verification" className="verification" >
                <button className="green-button" onClick={()=>{verify()}}>Verifiser meg</button>
            </div>
        </div>
    );
}

export default Verification;