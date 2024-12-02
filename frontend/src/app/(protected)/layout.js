"use client";
import DashboardSidebar from "@/components/sidebar/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useProfileQuery } from "@/features/user/userApi";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

const ProtectedLayout = ({ children }) => {
  const router = useRouter();
  const { data: profile, isLoading, error } = useProfileQuery();

  useLayoutEffect(() => {
    if (!isLoading) {
      if (error || !profile) {
        router.push("/login");
      } else if (profile.role === "trainee") {
        router.push("/trainee");
      } else if (profile.role === "trainer") {
        router.push("/trainer");
      } else if (profile.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/login");
      }
    }
  }, [profile, isLoading, error, router]);

  return <main className="xl:container">{children}</main>;
};
export default ProtectedLayout;
