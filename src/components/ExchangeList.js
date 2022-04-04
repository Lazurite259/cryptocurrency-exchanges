import React from "react";
import ExchangeRow from "./ExchangeRow";

const titles = ["Exchange", "Country", "Website", "Trust Rank"];

const ExchangeList = ({ exchanges }) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {exchanges.map((exchange) => (
                    <ExchangeRow key={exchange.id} exchange={exchange} />
                ))}
            </tbody>
        </table>
    );
};

export default ExchangeList;