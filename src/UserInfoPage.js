import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
const UserInfoPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        const response = await fetch(`http://localhost:5000/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await fetch(`http://localhost:5000/user/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      navigate("/login"); // Redirect to login page after deletion
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading)
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('../background.jpg')" }}
      >
        <div className="text-white text-xl">Loading...</div>
      </div>
    );

  if (error)
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('../background.jpg')" }}
      >
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-5"
      style={{ backgroundImage: "url('../background.jpg')" }}
    >
      <Header />
      <div
        className="bg-blue-900/60 backdrop-blur-md border border-white/30 p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 139, 0.4)" }}
      >
        <h1
          className="text-center mb-8 text-white text-4xl font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 255, 0.5)" }}
        >
          User Info
        </h1>
        <div className="space-y-6">
          <p className="text-xl text-white">
            <strong className="text-blue-300">User ID:</strong>
            <span className="ml-2">{user.userId}</span>
          </p>
          <p className="text-xl text-white">
            <strong className="text-blue-300">Username:</strong>
            <span className="ml-2">{user.username}</span>
          </p>
          <p className="text-xl text-white">
            <strong className="text-blue-300">Amount:</strong>
            <span className="ml-2">${user.amount}</span>
          </p>
          <button
            className="w-full mt-8 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-red-700 hover:scale-105 active:scale-95"
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
