import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "./UserContext";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(null);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, pwd }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      console.log("Login successful:", data); // Debugging log
      setUser({ userId: data.userId }); // Update the user context with userId
      localStorage.setItem("token", data.token); // Store the JWT token in local storage
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.message); // Debugging log
      setError(error.message);
    }
  };

  return (
    <div
      className="h-screen flex flex-col justify-center  items-center font-sans text-center relative bg-animated overflow-hidden"
      style={{ backgroundImage: "url('background.jpg') " }}
    >
      <h1
        className="text-[70px] font-mono text-white mb-4 font-bold"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Currency Exchange Market
      </h1>
      <div
        className="max-w-md w-full p-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/20"
        style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
      >
        <h2 className="text-center font-mono text-blue-400 mb-6 text-[40px] font-semibold">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-4 font-bold text-[20px] text-white">
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="w-full p-3 mt-2 border text-black border-gray-300 rounded box-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="mb-4 font-bold text-[20px] text-white">
            Password:
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              className="w-full p-3 mt-2 border text-black border-gray-300 rounded box-border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <button
            type="submit"
            className="mt-4 p-3 bg-gradient-to-r from-blue-500 via-purple-500 hover:font-bold to-blue-500 bg-[length:200%_100%] hover:animate-gradient-x text-white border-0 rounded cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Login
          </button>
        </form>
        {error && <p className="text-center text-red-600 mt-4">{error}</p>}
        <Link to="/signup">
          <button className="w-full mt-4 p-3 bg-gradient-to-r from-blue-500 via-purple-500 hover:font-bold  to-blue-500 bg-[length:200%_100%] hover:animate-gradient-x text-white border-0 rounded cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25">
            Go to Sign In Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
