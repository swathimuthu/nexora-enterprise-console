import { UserRole, Tenant } from "@/types/auth";

export interface FeatureFlags {
  analytics: boolean;
  auditLogs: boolean;
  advancedKPI: boolean;
}

export interface LoginResponse {
  name: string;
  role: UserRole;
  tenant: Tenant;
  token: string;
  featureFlags: FeatureFlags;
}

export interface DashboardData {
  totalRevenue: number;
  totalTransactions: number;
  riskScore: number;
}

const tenantFeatureMap: Record<Tenant, FeatureFlags> = {
  ACME_BANK: {
    analytics: true,
    auditLogs: true,
    advancedKPI: true,
  },
  FINCORP: {
    analytics: true,
    auditLogs: false,
    advancedKPI: false,
  },
  LENDX: {
    analytics: false,
    auditLogs: false,
    advancedKPI: false,
  },
};

export const mockServer = {
  async login(email: string, password: string): Promise<LoginResponse> {
    await new Promise((res) => setTimeout(res, 800));

    const tenant: Tenant =
      email === "admin@nexora.com" ? "ACME_BANK" : "FINCORP";

    return {
      name: email === "admin@nexora.com" ? "Admin User" : "Analyst User",
      role: email === "admin@nexora.com" ? "ADMIN" : "ANALYST",
      tenant,
      token: "mock-token",
      featureFlags: tenantFeatureMap[tenant],
    };
  },

  async getDashboardData(token: string): Promise<DashboardData> {
    await new Promise((res) => setTimeout(res, 500));

    return {
      totalRevenue: 1250000,
      totalTransactions: 4821,
      riskScore: 72,
    };
  },
};