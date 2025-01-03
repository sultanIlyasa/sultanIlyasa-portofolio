"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import PlatformGame from "@/components/ui/platform-games";
import Image from "next/image";
import ProfileComponent from "@/components/ui/profile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Hi!, I'm Sultan 👋
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            I'm a software engineer
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Get to know me!
          </button>
        </motion.div>
      </AuroraBackground>
      <div className="flex flex-col gap-4 items-center justify-center px-4">
        <ProfileComponent />
      </div>
      <div className="flex flex-col items-center justify-center px-4 my-10 py-10">
        <h1 className="text-3xl md:text-4xl dark:text-white text-center my-4">
          Tools and Frameworks
        </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem
              id="nextjs"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4 "
            >
              <Image
                src="/carousel/nextjs.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="100vw"
                className=" w-10 h-10 "
              ></Image>
            </CarouselItem>
            <CarouselItem
              id="nestjs"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/nestjs.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>
            </CarouselItem>
            <CarouselItem
              id="laravel"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/laravel.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="tailwind"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/tailwind.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="react"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/react.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="postgresql"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/postgres.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="prisma"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/prisma.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="typescript"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/typescript.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="php"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/php.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
            <CarouselItem
              id="python"
              className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
            >
              <Image
                src="/carousel/python.png"
                alt="Profile"
                width={0}
                height={0}
                sizes="10vw"
                className=" w-10 h-10 "
              ></Image>{" "}
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mx-auto gap-2 mt-9">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </main>
  );
}
