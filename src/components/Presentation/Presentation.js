import React from 'react';
import dnb from './dnb.png';
import './Presentation.css';

const Presentation = ({loans, text, name, graph, barGraph, callback}) => {
    return (<div className="presentation">
        <div className="presentationLeftM">
        <h2>Hei, {name}</h2>
        
        <span>
            {text}
        </span>

        </div>
        <div class="graph">
            <h3 className="presentationLeftM" >Din økonomi de siste 20 årene</h3>
            <iframe frameBorder={0} className="graph" src={graph} />
        </div>
        <span className="tableSection presentationLeftM">
            <table cellspacing={0}>
                <tr>
                    <td></td>
                    <td>Kreditor</td>
                    <td>Renter</td>
                    <td>Totalt</td>
                </tr>

            {loans.map((loan, index) => {
                return (<tr key={index}>
                    <td><img className="lenderIcons" src={loan.icon} /></td>
                    <td className="lenderText" >{loan.lender}</td>
                    <td>{loan.interestRate}</td>
                    <td>{loan.value}</td>
                </tr>)
            })}
            </table>
        </span>
        <div className="presentationLeftM">
            <img src={barGraph} />
        </div>

        <button className="presentationLeftM green-button" onClick={()=>{callback()}} >Vis meg mer</button>
        </div>);
}

export default Presentation;