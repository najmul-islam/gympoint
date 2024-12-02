import { Table } from "flowbite-react";
import Link from "next/link";

const ClassesItem = ({ item }) => {
  const { name, level, createdAt } = item;
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{level}</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
      <Table.Cell>
        <Link
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Edit
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};
export default ClassesItem;
