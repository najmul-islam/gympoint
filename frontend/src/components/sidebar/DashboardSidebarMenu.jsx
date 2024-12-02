"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useProfileQuery } from "@/features/user/userApi";
import Link from "next/link";
import DashboardSidebarMenuItem from "./DashboardSidebarMenuItem";

const DashboardSidebarMenu = () => {
  const { data: profile } = useProfileQuery();

  const role = profile?.role || "";
  return (
    <SidebarMenu className="p-5">
      <DashboardSidebarMenuItem url={`/${role}`}>
        Dashboard
      </DashboardSidebarMenuItem>
      <DashboardSidebarMenuItem url={`/${role}/profile`}>
        Profile
      </DashboardSidebarMenuItem>
      <DashboardSidebarMenuItem url={`/${role}/traners`}>
        Traners
      </DashboardSidebarMenuItem>
      <DashboardSidebarMenuItem url={`/${role}/classes`}>
        Classes
      </DashboardSidebarMenuItem>
      <DashboardSidebarMenuItem url={`/${role}/schedules`}>
        Schedules
      </DashboardSidebarMenuItem>
    </SidebarMenu>
  );
};
export default DashboardSidebarMenu;
