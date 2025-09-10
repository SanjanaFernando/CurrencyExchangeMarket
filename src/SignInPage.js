import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInPage() {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState(""); // Add this state
  const [pwd, setPwd] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, username, pwd }), // Include username
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        // Optionally, redirect to the login page or another page
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Error occurred while signing up");
    }
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-center text-gray-100"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <h1 className="text-[70px] font-mono text-white mb-6 font-bold">
        Currency Exchange Market
      </h1>
      <div
        className="max-w-md w-full p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/30"
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
      >
        <h2 className="text-center text-white text-3xl mb-6 font-semibold">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block text-left font-medium text-white mb-2">
              User ID:
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full mt-2 p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </label>
          </div>
          <div>
            <label className="block text-left font-medium text-white mb-2">
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full mt-2 p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </label>
          </div>
          <div>
            <label className="block text-left font-medium text-white mb-2">
              Password:
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                className="w-full mt-2 p-3 border border-white/30 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </form>
        {message && (
          <p className="text-center text-blue-300 mt-4 font-medium">
            {message}
          </p>
        )}
        <p className="text-center text-white mt-6">
          Already have an account?
          <Link
            to="/"
            className="text-blue-300 hover:text-blue-200 underline ml-1 transition-colors duration-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
