"use client";

import { ReactNode } from "react";
import { useAuthStore } from "@/store/auth";
import { UserRole } from "@/types/auth";

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: ReactNode;
}

export default function RoleGuard({
  allowedRoles,
  children,
}: RoleGuardProps) {
  const role = useAuthStore((state) => state.role);

  if (role && !allowedRoles.includes(role)) {
    return null;
  }

  return <>{children}</>;
}