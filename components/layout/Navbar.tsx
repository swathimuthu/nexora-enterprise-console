"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const name = useAuthStore((state) => state.name);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    setOpen(false);
    logout();
    router.push("/login");
  };

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6 relative fixed w-full">
      <div className="font-medium text-slate-700">
        Nexora Enterprise Console
      </div>

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center"
        >
          {name ? name.charAt(0).toUpperCase() : "U"}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-medium text-slate-800">
                {name || "Guest"}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-slate-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}