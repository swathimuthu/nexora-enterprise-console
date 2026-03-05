"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await login(email, "password");
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow w-96">
        <h2 className="text-xl font-semibold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm mt-4 text-gray-500">
          Try: admin@nexora.com
        </p>
      </div>
    </div>
  );
}