import BlogSection from "@/components/home/BlogSection";
import EventSection from "@/components/home/EventSection";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonySection from "@/components/home/TestimonySection";
import TrainerSection from "@/components/home/TrainerSection";
import Newsletter from "@/components/newsletter/Newsletter";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServiceSection />
      <ScheduleSection />
      <TestimonySection />
      <TrainerSection />
      <EventSection />
      <BlogSection />
      <Newsletter />
    </>
  );
};
export default HomePage;
