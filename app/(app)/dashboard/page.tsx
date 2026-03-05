"use client";

import RoleGuard from "@/components/access/RoleGuard";
import FeatureGuard from "@/components/access/FeatureGuard";
import { useAuthStore } from "@/store/auth";
import { Tenant } from "@/types/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDashboardDataApi } from "@/lib/api/dashboard";

export default function DashboardPage() {
    const [data, setData] = useState<any>(null); 

    const token = useAuthStore((state) => state.token);

    useEffect(() => {
    const fetchData = async () => {
        if (token) {
        const response = await getDashboardDataApi(token);
        setData(response);
        }
    };
    fetchData();
    }, [token]);

    

    return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Dashboard
      </h1>
      {data && (
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                Revenue: ${data.totalRevenue}
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                Transactions: {data.totalTransactions}
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                Risk Score: {data.riskScore}
                </div>
            </div>
        )}
    </div>
  );
}