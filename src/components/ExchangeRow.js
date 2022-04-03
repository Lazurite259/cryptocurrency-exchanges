import React from "react";

const ExchangeRow = ({ exchange }) => {
    return (
        <tr>
            <td>
                <img src={exchange.image} />
                <span>{exchange.name}</span>
            </td>
            <td>{exchange.country}</td>
            <td><a href={exchange.url}>{exchange.url}</a></td>
            <td>{exchange.trust_score_rank}</td>
        </tr>
    );
};

export default ExchangeRow;