"use client";
import { Table } from "flowbite-react";
import ClassesItem from "./ClassesItem";

const ClasessList = ({ classes }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Lavel</Table.HeadCell>
          <Table.HeadCell>CreatedAt</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {classes.map((item) => (
            <ClassesItem key={item.id} item={item} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default ClasessList;
