import intros from "@/data/intros.json";
import IntroList from "../intro/IntroList";

const IntroSection = () => {
  return (
    <section className="bg-[#F2F3F7]">
      <IntroList intros={intros} />
    </section>
  );
};
export default IntroSection;
