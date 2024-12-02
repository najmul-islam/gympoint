"use client";
import { useCreateClassMutation } from "@/features/class/classApi";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddClassForm = () => {
  const [createClasse, { isSuccess, isError, error }] =
    useCreateClassMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const { name, description, level, equipment } = data;
    const equipmentArray = equipment.split(",").map((item) => item.trim());

    createClasse({
      name,
      description,
      level,
      equipment: equipmentArray,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Class create successfully");
      reset();
    }
    if (isError) {
      console.log(error);
      toast.error(error.data.message);
    }
  }, [isSuccess, isError, error]);
  return (
    <form
      className="flex max-w-lg flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Class Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          {...register("name", { required: "Class Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <TextInput
          id="description"
          type="text"
          {...register("description", {
            required: "Description is required",
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="level" value="Level" />
        </div>
        <TextInput
          id="level"
          type="text"
          {...register("level", { required: "Level is required" })}
        />
        {errors.level && (
          <span className="text-red-500 text-sm">{errors.level.message}</span>
        )}
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="equipment" value="Equipment" />
        </div>
        <TextInput
          id="equipment"
          type="text"
          placeholder="Separate by commas"
          {...register("equipment", {
            required: "Equipment is required",
          })}
        />
        {errors.equipment && (
          <span className="text-red-500 text-sm">
            {errors.equipment.message}
          </span>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
export default AddClassForm;
