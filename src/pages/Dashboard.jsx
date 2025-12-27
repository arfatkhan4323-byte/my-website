import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";


function Dashboard() {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome 🎉
      </h1>

      <p className="mb-6">
        Logged in as: <b>{auth.currentUser?.email}</b>
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
