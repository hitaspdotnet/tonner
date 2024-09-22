"use client";

import { useAppRootContext } from "@/hooks/useAppRootContext";

import type { AppRootContextInterface } from "@/components/service/AppRoot/AppRootContext";

export const usePlatform = (): NonNullable<
  AppRootContextInterface["platform"]
> => {
  const context = useAppRootContext();
  return context.platform || "base";
};
