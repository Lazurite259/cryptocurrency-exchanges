import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Exchange() {
    let navigate = useNavigate();

    // Get exchange data
    const exchange = useLocation();

    return (
        <div className="App">
            <div className="container mt-4">
                <header>
                    <img src={exchange.state.image} alt={exchange.state.name} className="rounded me-3" style={{ width: "5%" }} />
                    <h2 className="mt-2">{exchange.state.name}</h2>
                </header>
                <div className="row">
                    <p><b>Country:</b> {exchange.state.country}</p>
                    <p><b>Trust Rank:</b> {exchange.state.trust_score_rank}</p>
                    <p><b>Year of Establishment:</b> {exchange.state.year_established}</p>
                    <p><b>Website:</b> <a href={exchange.state.url}>{exchange.state.url}</a></p>
                    <p><b>Description:</b> {exchange.state.description}</p>
                    <button type="button" onClick={() => { navigate("/") }}>Back to Main</button>
                </div>
            </div>
        </div>
    );
};

export default Exchange;