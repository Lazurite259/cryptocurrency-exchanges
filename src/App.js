import './App.css';
import axios from "axios";
import ExchangeList from './components/ExchangeList';
import React, { useEffect, useState } from 'react';

/**
 * 
 * @return The main page of this applicaiton.
 */
function App() {
  /**
   * Declare a new state variable "exchanges" and a function "setExchanges" to update it.
   * Initialize exchanges = []
   */
  const [exchanges, setExchanges] = useState([]);

  const getData = async () => {
    try {
      const dat = await axios.get("https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1");
      setExchanges(dat.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Do updates
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"><h2>First Ten Cryptocurrency Exchanges</h2></header>
      <div className="App-table">
        <ExchangeList exchanges={exchanges} />
      </div>
    </div>
  );
}

export default App;
