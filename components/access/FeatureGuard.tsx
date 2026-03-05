"use client";

import { ReactNode } from "react";
import { useAuthStore } from "@/store/auth";

interface FeatureGuardProps {
  flag: keyof NonNullable<
    ReturnType<typeof useAuthStore.getState>["featureFlags"]
  >;
  children: ReactNode;
}

export default function FeatureGuard({
  flag,
  children,
}: FeatureGuardProps) {
  const featureFlags = useAuthStore((state) => state.featureFlags);

  if (!featureFlags || !featureFlags[flag]) {
    return null;
  }

  return <>{children}</>;
}