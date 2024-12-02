import Image from "next/image";

const ServiceItem = ({ service }) => {
  const { title, description, thumbnail } = service;
  return (
    <div className="bg-[#F2F3F7] gap-2 text-center flex flex-col p-8 justify-center items-center">
      <Image src={thumbnail} width={100} height={100} alt={title} />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className=" text-gray-500">{description}</p>
    </div>
  );
};
export default ServiceItem;
