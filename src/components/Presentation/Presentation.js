import React from 'react';
import dnb from './dnb.png';
import './Presentation.css';

const Presentation = ({loans, text, name, graph, barGraph}) => {
    return (<div>
        <h2>Hei, {name}</h2>
        <span>
            {text}
        </span>
        <div className="graph">
            <h3>Din økonomi de siste 20 årene</h3>
            <img src={graph} />
        </div>
        <span>
            <table>
                <tr>
                    <td></td>
                    <td>Kreditor</td>
                    <td>Renter</td>
                    <td>Totalt</td>
                </tr>

            {loans.map((loan, index) => {
                return (<tr key={index}>
                    <td><img className="lenderIcons" src={loan.icon} /></td>
                    <td>{loan.lender}</td>
                    <td>{loan.interestRate}</td>
                    <td>{loan.value}</td>
                </tr>)
            })}
            </table>
        </span>
        <div>
            <img src={barGraph} />
        </div>

        <button className="green-button" >Vis meg mer</button>
        </div>);
}

export default Presentation;