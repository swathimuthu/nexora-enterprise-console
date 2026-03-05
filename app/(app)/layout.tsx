"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((state) => state.token);
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && !token) {
      router.push("/login");
    }
  }, [token, router, hydrated]);

  if (!hydrated) return null;

  return (
    <>
      <Sidebar />
      <div className="ml-64">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </>
  );
}