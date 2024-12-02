"use client";
import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="h-56 sm:h-80 xl:h-[70vh] bg-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: "url('/hero/hero_bg_3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="w-full h-full flex flex-col gap-16 items-center justify-center">
        <h1 className="text-2xl md:text-[60px] font-extrabold text-white text-center">
          Success is a journey, not a destination.
        </h1>

        <Button
          gradientMonochrome="purple"
          className="text-2xl p-2 rounded-full"
        >
          <Link href="/register">Became Trainee</Link>
        </Button>
      </div>
      {/* <Carousel
        slideInterval={5000}
        rightControl
        leftControl
        indicators={false}
        className=""
      >
         <div className="relative w-full h-full">
          <Image
            src="/hero/hero_bg_1.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image 1"
            className=""
          />
          <h1>Success is a journey, not a destination.</h1>
        </div> 
        <div className="relative w-full h-full">
          <Image
            src="/hero/hero_bg_2.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image 2"
          />
          <div className="absolute p-20 inset-0 flex flex-col gap-4 lg:gap-8 items-center justify-center">
            <h1 className=" text-[#CCCCCC] text-2xl sm:text-3xl  md:text-5xl font-bold text-center">
              Train your mind, and your body will follow.
            </h1>
            <Button gradientDuoTone="pinkToOrange">
              <Link href="/login">JOIN CLASSES </Link>
            </Button>
          </div>
        </div>
        {/* <div className="relative w-full h-full">
          <Image
            src="/hero/hero_bg_3.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image 3"
          />
          <h1>Sweat today so you can shine tomorrow</h1>
        </div>

        <div className="relative w-full h-full">
          <Image
            src="/hero/hero_bg_3.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero Image 3"
          />
          <h1>The pain you feel today is the strength you’ll feel tomorrow.</h1>
        </div> 
      </Carousel> */}
    </section>
  );
};
export default HeroSection;
