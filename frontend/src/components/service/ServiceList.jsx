import ServiceItem from "./ServiceItem";

const ServiceList = ({ services }) => {
  return (
    <div className="container py-24 gap-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};
export default ServiceList;
