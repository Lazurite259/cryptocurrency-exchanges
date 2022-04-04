import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * 
 * @return The row with exchange's information of country, website, and trust rank. 
 */
const ExchangeRow = ({ exchange }) => {
    // Navigate to the exchange page
    let navigate = useNavigate();

    return (
        <tr onClick={() => { navigate(`/${exchange.id}`, { state: exchange }) }}>
            <td>
                <img src={exchange.image} alt={exchange.name} className="rounded img-fluid mx-3" style={{ width: "5%" }} />
                <span>{exchange.name}</span>
            </td>
            <td>{exchange.country}</td>
            <td><a href={exchange.url}>{exchange.url}</a></td>
            <td className="text-center">{exchange.trust_score_rank}</td>
        </tr>
    );
};

export default ExchangeRow;