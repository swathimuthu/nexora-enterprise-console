import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginApi } from "@/lib/api/auth";
import { UserRole, Tenant } from "@/types/auth";
import { FeatureFlags } from "@/lib/mockServer";

interface AuthState {
  name: string | null;
  role: UserRole | null;
  tenant: Tenant | null;
  token: string | null;
  featureFlags: FeatureFlags | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      name: null,
      role: null,
      tenant: null,
      token: null,
      featureFlags: null,
      loading: false,

      login: async (email, password) => {
        set({ loading: true });

        const response = await loginApi(email, password);

        set({
          name: response.name,
          role: response.role,
          tenant: response.tenant,
          token: response.token,
          featureFlags: response.featureFlags,
          loading: false,
        });
      },

      logout: () =>
        set({
          name: null,
          role: null,
          tenant: null,
          token: null,
          featureFlags: null,
        }),
    }),
    {
      name: "nexora-auth-storage",
    }
  )
);