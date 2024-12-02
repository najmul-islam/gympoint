import AdminSidebar from "@/components/sidebar/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      {children}
    </div>
  );
};
export default AdminLayout;
