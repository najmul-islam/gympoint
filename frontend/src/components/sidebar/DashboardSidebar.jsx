import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import DahsboardSidebarMenu from "./DashboardSidebarMenu";

const DashboardSidebar = () => {
  return (
    <Sidebar collapsible="none" className="h-auto">
      <SidebarContent>
        <SidebarGroupContent>
          <DahsboardSidebarMenu />
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
export default DashboardSidebar;
