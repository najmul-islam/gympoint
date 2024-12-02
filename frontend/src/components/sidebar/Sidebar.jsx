"use client";
import Link from "next/link";

const Sidebar = () => {
  const { data: profile } = useProfileQuery();

  const role = profile?.role || "";
  return (
    <aside>
      <ul>
        <li>
          <Link href={`${role}/dashboard`}>Dashboard</Link>
        </li>
        <li>
          <Link href={`${role}/profile`}>Dashboard</Link>
        </li>
        <li>
          <Link href={`${role}/traners`}>Traners</Link>
        </li>
        <li>
          <Link href={`${role}/classes`}>classes</Link>
        </li>
        <li>
          <Link href={`${role}/schedules`}>Schedules</Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
