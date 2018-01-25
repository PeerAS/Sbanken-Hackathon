import React from 'react';

const Presentation = ({loans, text, name}) => {
    return (<div>
        <h2>Hei, {name}</h2>
        <span>
            {text}
        </span>
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
                    <td><img src="~/icons/dnb.png" /></td>
                    <td>{loan.lender}</td>
                    <td>{loan.interestRate}</td>
                    <td>{loan.value}</td>
                </tr>)
            })}
            </table>
        </span>
        </div>);
}

export default Presentation;