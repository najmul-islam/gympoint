"use client";
import Link from "next/link";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi";

const AdminSidebar = () => {
  return (
    <aside>
      <Sidebar className="h-full" aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiChartPie}>
              <Link href="/admin" className="block">
                Dashboard
              </Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiViewBoards}>
              <Link href="/admin/classes" className="block">
                Classes
              </Link>
            </Sidebar.Item>

            <Sidebar.Item icon={HiInbox}>
              <Link href="/admin/schedules" className="block">
                Schedules
              </Link>
            </Sidebar.Item>

            <Sidebar.Item href="/admin/trainers" icon={HiUser}>
              <Link href="/admin/trainers" className="block">
                Trainers
              </Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </aside>
  );
};
export default AdminSidebar;
