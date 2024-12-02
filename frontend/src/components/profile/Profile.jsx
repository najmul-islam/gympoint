"use client";
import { useProfileQuery } from "@/features/user/userApi";

const Profile = () => {
  const { data: profile } = useProfileQuery();

  return (
    <div>
      <h1>Name:{profile?.name}</h1>
      <h3>Email:{profile?.email}</h3>
      <h5>Role: {profile?.role}</h5>
    </div>
  );
};
export default Profile;
