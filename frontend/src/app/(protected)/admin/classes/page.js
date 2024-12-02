import ClasessList from "@/components/admin/classes/ClasessList";
import { Button } from "flowbite-react";
import Link from "next/link";

const getAllClass = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/classes`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch classes");
    }
    const data = response.json();

    return data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    return [];
  }
};

const ClassesPage = async () => {
  const classes = await getAllClass();
  return (
    <div className="p-5">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl mb-3 font-bold">Classes</h1>
        <Button color="purple">
          <Link href="/admin/classes/add" className="block">
            Add Class
          </Link>
        </Button>
      </div>
      <ClasessList classes={classes} />
    </div>
  );
};
export default ClassesPage;
