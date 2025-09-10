import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function ExchangeRatesPage() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setRates(response.data.rates);
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        setError("Error fetching currencies.");
        console.error(error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        setResult(
          `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
        );
      } else {
        setError("Invalid currency code.");
      }
    } catch (error) {
      setError("Error fetching exchange rates.");
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('../background.jpg')" }}
    >
      <div className="flex flex-col items-center h-screen mt-36">
        <Header />
        <h2
          className="text-center mb-5 text-white text-5xl font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 255, 0.5)" }}
        >
          Exchange Rates Calculator
        </h2>
        <div
          className="flex flex-col items-center bg-blue-900/60 backdrop-blur-md border border-white/30 p-5 rounded-lg shadow-lg w-80"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 139, 0.4)" }}
        >
          <label className="flex flex-col text-xl text-white mb-2.5 w-full">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2.5 mt-1 border border-white rounded bg-white/10 text-white w-full"
            />
          </label>
          <label className="flex flex-col text-xl text-white mb-2.5 w-full">
            From Currency:
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="p-2.5 mt-1 border border-white rounded bg-white/10 text-white w-full"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency} className="text-black">
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-xl text-white mb-2.5 w-full">
            To Currency:
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="p-2.5 mt-1 border border-white rounded bg-white/10 text-white w-full"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency} className="text-black">
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={handleConvert}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:scale-110 active:scale-95"
          >
            Convert
          </button>
        </div>
        {error && <p className="mt-5 text-red-400 text-lg">{error}</p>}
        {result && <p className="mt-5 text-blue-400 text-lg">{result}</p>}
      </div>
    </div>
  );
}

export default ExchangeRatesPage;
