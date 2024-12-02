"use client";
import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const DashboardSidebarMenuItem = ({ url, children }) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link href={url}>
          <span>{children}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
export default DashboardSidebarMenuItem;
