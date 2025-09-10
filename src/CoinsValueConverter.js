// ExchangeRatesPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";

function ExchangeRatesPage() {
  const [coins, setCoins] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [convertedValue, setConvertedValue] = useState(0);
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        // Replace 'your-api-key' with your actual API key
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setRates({ USD: 1, GBP: 0.785, LKR: 303.06 }); // Fallback rates
      }
    };

    fetchExchangeRates();
  }, []);

  const handleConvert = () => {
    const rate = rates[currency];
    const value = coins * rate;
    setConvertedValue(value);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('../background.jpg')" }}
    >
      <div className="flex flex-col items-center mt-36">
        <Header />
        <h2
          className="text-center mb-5 text-white text-5xl font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 255, 0.5)" }}
        >
          Coins Value Converter
        </h2>
        <div
          className="flex flex-col items-center bg-blue-900/60 backdrop-blur-md border border-white/30 p-5 rounded-lg shadow-lg w-80"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 139, 0.4)" }}
        >
          <label className="flex flex-col text-xl text-white mb-2.5 w-full">
            Coins:
            <input
              type="number"
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              className="p-2.5 mt-1 border border-white rounded bg-white/10 text-white w-full"
            />
          </label>
          <label className="flex flex-col text-xl text-white mb-2.5 w-full">
            Currency:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-2.5 mt-1 border border-white rounded bg-white/10 text-white w-full"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency} className="text-black">
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <motion.button
            onClick={handleConvert}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-blue-700"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Convert
          </motion.button>
        </div>
        <AnimatePresence>
          {convertedValue !== 0 && (
            <motion.div
              className="mt-5 text-center"
              initial={{
                scale: 0,
                opacity: 0,
                y: 20,
                rotate: -5,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                y: -20,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.5,
              }}
            >
              <motion.p
                className="text-blue-400 text-[30px] font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {coins} coins is equal to:
              </motion.p>
              <motion.p
                className="text-blue-600 text-[30px] font-extrabold"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 400,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                {convertedValue.toFixed(2)} {currency}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExchangeRatesPage;
