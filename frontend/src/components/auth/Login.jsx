"use client";
import Link from "next/link";
import { useLoginMutation } from "@/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  const [login, { isError, isSuccess, error }] = useLoginMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  useLayoutEffect(() => {
    if (user) {
      router.push("/profile");
    }

    if (isError) {
      console.log(error);
      // if (error?.status === 400) {
      //   toast.error(error?.data?.message);
      // }
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Register successfully");
      router.push("/profile");
    }
  });
  return (
    <div className="w-96 m-auto shadow-lg border rounded-md p-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-primary">Login</h1>
        <Link href="/register" className="text-primary hover:underline">
          Don't have an account?
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true })}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black font-semibold py-2 px-4 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
