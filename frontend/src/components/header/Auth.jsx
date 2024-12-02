"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/features/auth/authSlice";
import { useProfileQuery } from "@/features/user/userApi";

const Auth = () => {
  const { data: profile } = useProfileQuery();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const firstLetter = profile?.name
    ? profile?.name.charAt(0).toUpperCase()
    : "";
  const role = profile?.role || "";
  return profile ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="w-8 h-8">
          <AvatarFallback>{firstLetter}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/${role}`}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${role}/profile`}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link
      href="/login"
      className="text-black font-semibold bg-[#FD7E15] px-3 py-1 rounded-xl"
    >
      Sing in
    </Link>
  );
};
export default Auth;
