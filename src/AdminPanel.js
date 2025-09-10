import React, { useEffect, useState } from "react";
import { getAllUsers, updateUserAmount, deleteUser } from "./adminService";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newAmount, setNewAmount] = useState("");

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const handleEdit = (id, amount) => {
    setEditingId(id);
    setNewAmount(amount);
  };

  const handleSave = async (id) => {
    await updateUserAmount(id, newAmount);
    setUsers(
      users.map((u) => (u.userId === id ? { ...u, amount: newAmount } : u))
    );
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.userId !== id));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-3xl mx-auto bg-white/80 rounded-xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow">
          Admin Panel - Manage Users
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-blue-200 rounded-lg shadow">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-blue-700 font-semibold text-center">
                  User ID
                </th>
                <th className="p-3 text-blue-700 font-semibold text-center">
                  Name
                </th>
                <th className="p-3 text-blue-700 font-semibold text-center">
                  Amount
                </th>
                <th className="p-3 text-blue-700 font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.userId}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="p-3 text-center">{user.userId}</td>
                  <td className="p-3 text-center">{user.username}</td>
                  <td className="p-3 text-center">
                    {editingId === user.userId ? (
                      <input
                        type="number"
                        value={newAmount}
                        onChange={(e) => setNewAmount(e.target.value)}
                        className="border border-blue-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    ) : (
                      <span className="font-bold text-blue-600">
                        {user.amount}
                      </span>
                    )}
                  </td>
                  <td className="p-3 flex justify-center gap-2">
                    {editingId === user.userId ? (
                      <button
                        onClick={() => handleSave(user.userId)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded shadow transition"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(user.userId, user.amount)}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-1 rounded shadow transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.userId)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow transition"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
