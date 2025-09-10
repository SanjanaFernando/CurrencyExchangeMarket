import React, { useState } from "react";
import Header from "./Header";

function TransactionPage() {
  const [senderId, setSenderId] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await fetch("http://localhost:5000/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the Authorization header
        },
        body: JSON.stringify({
          senderId,
          recipientId,
          amount: parseFloat(amount),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        // Clear the form fields
        setSenderId("");
        setRecipientId("");
        setAmount("");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Error occurred while transferring");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 p-5">
        <div
          className="bg-blue-900/60 backdrop-blur-md border border-white/30 p-8 rounded-lg shadow-lg w-full max-w-md"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 139, 0.4)" }}
        >
          <h2
            className="text-center mb-5 text-white text-4xl font-bold"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 255, 0.5)" }}
          >
            Currency Transfer
          </h2>
          <form onSubmit={handleTransfer} className="space-y-4">
            <div>
              <label className="flex flex-col text-xl text-white mb-2">
                Sender User ID:
                <input
                  type="text"
                  value={senderId}
                  onChange={(e) => setSenderId(e.target.value)}
                  required
                  className="p-3 mt-1 border border-white rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col text-xl text-white mb-2">
                Recipient User ID:
                <input
                  type="text"
                  value={recipientId}
                  onChange={(e) => setRecipientId(e.target.value)}
                  required
                  className="p-3 mt-1 border border-white rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col text-xl text-white mb-2">
                Amount:
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="p-3 mt-1 border border-white rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95"
            >
              Transfer
            </button>
          </form>
          {message && (
            <p className="mt-5 text-center text-blue-300 text-lg font-medium">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
