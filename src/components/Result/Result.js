import React from 'react';
import './Result.css';


const Result = () => {
    return(<div className="resultWrapper">
        <h2>Ok, sånn blir det</h2>
        <p>Vi kombinerer din formue og dine lån og har kommet frem til dette</p>
        <div className="savingsInfo">
            <div>
                <h3>23 450,-</h3>
                <div className="line"></div>
                <p>Betaler du idag i måneden</p>
                <h3>19 120,-</h3>
                <div className="line"></div>
                <p>Vil du betale hos oss i måneden</p>
            </div>
        </div>
        <p>Du vil spare 4333 kr ved å flytte og restrukturere dine lån hos oss, det er nesten
            19%
            </p>
    </div>);
}

export default Result;