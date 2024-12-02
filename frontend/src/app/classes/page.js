import React from "react";

async function getClasses() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/classes`, {
    method: "GET",
  });
  const data = response.json();
  return data;
}

const ClassesPage = async () => {
  const { data: classes } = await getClasses();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Available Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {classes?.map((classItem) => (
          <div
            key={classItem._id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
            <p className="text-gray-600 mb-4">{classItem.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Level:</span> {classItem.level}
            </p>
            {classItem.equipment?.length > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold">Equipment:</span>{" "}
                {classItem.equipment.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
