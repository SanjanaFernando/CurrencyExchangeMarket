const BASE_URL = "http://localhost:5000"; // Change if using a proxy

export async function getAllUsers() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/api/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}
export async function deleteUser(userId) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/api/admin/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to delete user");
  }
  return res.json();
}

export async function updateUserAmount(userId, amount) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/api/admin/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });
  if (!res.ok) {
    throw new Error("Failed to update user amount");
  }
  return res.json();
}
