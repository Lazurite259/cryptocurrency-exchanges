import React from "react";

const ExchangeRow = ({ exchange }) => {
    return (
        <tr>
            <td>{exchange.name}</td>
            <td>{exchange.country}</td>
            <td><a href={exchange.url}>{exchange.url}</a></td>
            <td><img src={exchange.image} /></td>
            <td>{exchange.trust_score_rank}</td>
        </tr>
    );
};

export default ExchangeRow;