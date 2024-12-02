import services from "@/data/services.json";
import ServiceList from "../service/ServiceList";

const ServiceSection = () => {
  return (
    <section className="bg-white">
      <div className="container md:w-8/12 lg:w-6/12 text-center flex flex-col gap-6 pt-16">
        <h1 className="text-[30px] md:text-4xl font-extrabold uppercase">
          Being fit is attractive
        </h1>
        <p className="text-[17px] text-[#808080]">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name
        </p>
      </div>
      <ServiceList services={services} />
    </section>
  );
};
export default ServiceSection;
