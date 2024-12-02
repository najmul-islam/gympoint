"use client";
import { useRegisterMutation } from "@/features/auth/authApi";
import { useProfileQuery } from "@/features/user/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const Register = () => {
  const user = useSelector((state) => state.auth.user);
  const { data: profile } = useProfileQuery();
  const router = useRouter();
  const [registerUser, { isError, isSuccess, error }] = useRegisterMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };

  useLayoutEffect(() => {
    if (user) {
      router.push(`/${profile?.role}`);
    }

    if (isError) {
      console.log(error);
      if (error?.status === 400) {
        toast.error(error?.data?.message);
      }
      toast.error(error?.error);
    }

    if (isSuccess) {
      toast.success("Register successfully");
    }
  });
  return (
    <div className="w-96 m-auto shadow-lg border rounded-md p-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-primary">Register</h1>
        <Link href="/login" className="text-primary hover:underline">
          Have an account?
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          />
          {errors.name?.type === "required" && <span>Name is required</span>}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          />
          {errors.name?.type === "required" && <span>Email is required</span>}
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
          {errors.name?.type === "required" && (
            <span>Password is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black font-semibold py-2 px-4 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
